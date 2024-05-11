import express from 'express'
import { protect, verifyRefreshToken } from '../middleware/authMiddleware.js'
import {
  authUser,
  registerUser,
  logoutUser,
  getAccessToken,
  getUserProfile,
  updateUserProfile
} from '../controllers/userController.js'

const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', authUser)
router.post('/logout', protect, verifyRefreshToken, logoutUser)
router.get('/tokens', protect, getAccessToken)
router.route('/profile').get(protect, verifyRefreshToken, getUserProfile).put(protect, verifyRefreshToken, updateUserProfile)

export default router