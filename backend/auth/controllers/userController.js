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
    res.status(200)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      age: user.age,
      phoneNumber: user.phoneNumber,
      address: user.address,
      isAdmin: user.isAdmin,
      token: generateToken(user._id, user.name, user.isAdmin)
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
      token: generateToken(user._id, user.name, user.isAdmin)
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
    res.status(200)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      age: user.age,
      phoneNumber: user.phoneNumber,
      address: user.address,
      isAdmin: user.isAdmin
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.image = req.body.image || user.image
    user.age = req.body.age || user.age
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber
    user.address = req.body.address || user.address

    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.status(200)
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      image: updatedUser.image,
      age: updatedUser.age,
      phoneNumber: updatedUser.phoneNumber,
      address: updatedUser.address,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id, updatedUser.name, updatedUser.isAdmin)
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getUsers = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 12
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i'
    }
  } : {}

  const count = await User.countDocuments({...keyword})
  const users = await User.find({...keyword}).limit(pageSize * (page - 1)).select('-password')

  res.json({
    count,
    users,
    pageSize,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await User.deleteOne({_id: req.params.id})
    res.status(200)
    res.json({
      message: 'User deleted successfully'
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.status(200)
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.isAdmin = req.body.isAdmin
    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      image: updatedUser.image,
      age: updatedUser.age,
      phoneNumber: updatedUser.phoneNumber,
      address: updatedUser.address,
      isAdmin: updatedUser.isAdmin
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
  authUser,
  registerUser,
  logoutUser,
  getAccessToken,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
}