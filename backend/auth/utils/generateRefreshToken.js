import jwt from 'jsonwebtoken'
import { redis_client } from '../config/redisdb.js'

const generateRefreshToken = (id) => {
  const refresh_token = jwt.sign({id}, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_TIME
  })

  redis_client.get(id.toString(), (err, data) => {
    if (err) throw err

    redis_client.set(id.toString(), JSON.stringify({
      token: refresh_token
    }))
  })

  return refresh_token
}

export default generateRefreshToken