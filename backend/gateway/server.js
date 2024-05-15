import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('combined'))
app.disable('x-powered-by')

const services = [
  {
    route: '/auth',
    target: 'http://localhost:5001/api/users'
  },
  {
    route: '/shop',
    target: 'http://127.0.0.1:5002/api/shop'
  },
  {
    route: '/orders',
    target: 'http://127.0.0.1/api/orders'
  }
]

const rateLimit = 100
const interval = 60 * 1000

const requestCount = {}

setInterval(() => {
  Object.keys(requestCount).forEach((ip) => {
    requestCount[ip] = 0
  })
}, interval)

function rateLimitAndTimeout(req, res, next) {
  const ip = req.ip
  requestCount[ip] = (requestCount[ip] || 0) + 1

  if (requestCount[ip] > rateLimit) {
    return res.status(429).json({
      code: 429,
      status: 'Error',
      message: 'Rate limit exceeded',
      data: null
    })
  }

  req.setTimeout(15000, () => {
    res.status(504).json({
      code: 504,
      status: 'Error',
      message: 'Gateway timeout',
      data: null
    })
    req.abort()
  });

  next()
}

app.use(rateLimitAndTimeout)

services.forEach(({ route, target }) => {
  const proxyOptions = {
    target,
    changeOrigin: true,
    pathRewrite: {
      [`${route}`]: ''
    }
  }

  app.use(route, rateLimitAndTimeout, createProxyMiddleware(proxyOptions))
})

app.use((_req, res) => {
  res.status(404).json({
    code: 404,
    status: 'Error',
    message: 'Route not found',
    data: null
  })
})

const port = 5000
app.listen(port, console.log(`Gateway running`))