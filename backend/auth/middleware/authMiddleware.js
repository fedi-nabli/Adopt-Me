import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import { redis_client } from '../config/redisdb.js'

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      req.token = token

      redis_client.get(`BL_${decoded.id}`, (err, data) => {
        if (err) throw err
        if (data === token) {
          res.status(401)
          throw new Error('Token failed: blacklisted token')
        }
      })
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized - no token')
  }
})

const verifyRefreshToken = asyncHandler((req, res, next) => {
  const token = req.body.token

  if (token === null) {
    res.status(401)
    throw new Error('Invalid request, no token provided')
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
    req.user_data = decoded

    redis_client.get(decoded.id.toString(), (err, data) => {
      if (err) throw err

      if (data === null) {
        res.status(401)
        throw new Error('Invalid request: Token is not in store')
      }

      if (JSON.parse(data).token != token) {
        res.status(401)
        throw new Error('Invalid request: Token is not same in store')
      }

      next()
    })
  } catch (error) {
    console.error(error)
    res.status(401)
    throw new Error('Your session is not valid')
  }
})

export {
  protect,
  verifyRefreshToken
}