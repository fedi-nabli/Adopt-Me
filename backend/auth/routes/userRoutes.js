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

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.post('/logout', protect, logoutUser)
router.get('/tokens', protect, getAccessToken)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').get(protect, admin, getUserById).put(protect, admin, updateUser).delete(protect, admin, deleteUser)

export default router