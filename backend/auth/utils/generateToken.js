import jwt from 'jsonwebtoken'

const generateToken = (id,name, isAdmin) => {
  return jwt.sign({'id': id, 'name': name, 'admin': isAdmin}, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_TIME,
    algorithm: 'HS256'
  })
}

export default generateToken