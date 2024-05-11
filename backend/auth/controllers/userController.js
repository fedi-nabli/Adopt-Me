import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
import generateRefreshToken from '../utils/generateRefreshToken.js'
import { redis_client } from '../config/redisdb.js'

const authUser = asyncHandler(async (req, res) => {
  const {
    email,
    password
  } = req.body

  const user = await User.findOne({email})
  
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      age: user.age,
      phoneNumber: user.phoneNumber,
      address: user.address,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      refresh_token: generateRefreshToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    image,
    age,
    phoneNumber,
    address
  } = req.body

  const userExists = await User.findOne({email})
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
    image,
    age,
    phoneNumber,
    address
  })

  if (user) {
    res.status(201)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      age: user.age,
      phoneNumber: user.phoneNumber,
      address: user.address,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      refresh_token: generateRefreshToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

const logoutUser = asyncHandler(async (req, res) => {
  const user_id = req.user._id
  const token = req.token

  await redis_client.del(user_id.toString())
  await redis_client.set(`BL_${user_id}`, token)

  res.status(200)
  res.json({
    success: true,
    message: 'Successfully logout out user'
  })
})

const getAccessToken = asyncHandler((req, res) => {
  const user_id = req.user._id

  const access_token = generateToken(user_id)
  const refresh_token = generateRefreshToken(user_id)

  res.status(201)
  res.json({
    success: true,
    message: 'success',
    data: {
      accessToken: access_token,
      refreshToken: refresh_token
    }
  })
})

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
  authUser,
  registerUser,
  logoutUser,
  getAccessToken
}