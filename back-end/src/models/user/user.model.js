const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const config = require('config')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

// cant find type for next function, in mongoose 6 this has type mongoose.HooksNextFunction
userSchema.pre('save', async function (next) {
  let user = this

  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(config.get('saltWorkFactor'))
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
  }

  return next()
})

userSchema.methods.comparePassword = async function (candidatePassowrd) {
  let user = this
  return bcrypt.compare(candidatePassowrd, user.password).catch(() => false)
}

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
