import express from 'express'
import { protect, verifyRefreshToken, admin } from '../middleware/authMiddleware.js'
import {
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
} from '../controllers/userController.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect, verifyRefreshToken, admin, getUsers)
router.post('/login', authUser)
router.post('/logout', protect, verifyRefreshToken, logoutUser)
router.get('/tokens', protect, getAccessToken)
router.route('/profile').get(protect, verifyRefreshToken, getUserProfile).put(protect, verifyRefreshToken, updateUserProfile)
router.route('/:id').get(protect, verifyRefreshToken, admin, getUserById).put(protect, verifyRefreshToken, admin, updateUser).delete(protect, verifyRefreshToken, admin, deleteUser)

export default router