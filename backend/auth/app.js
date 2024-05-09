import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import connectDB from './config/mongob.js'
import { connectRedis } from './config/redisdb.js'

dotenv.config()
connectDB()
connectRedis()

const app = express()
app.use(express.json())

app.use(notFound)
app.use(errorHandler)

const PORT = 5001
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))