import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_TIME,
    algorithm: 'HS256'
  })
}

export default generateToken