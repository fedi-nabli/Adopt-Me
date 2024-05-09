import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const addressSchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
    minLength: 3
  },
  city: {
    type: String,
    required: true,
    minLength: 3
  },
  postalCode: {
    type: Number,
    required: true
  },
  fullAddress: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Home', 'Work', 'University', 'School']
  }
})

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 40
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 110
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 14
  },
  address: addressSchema,
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User