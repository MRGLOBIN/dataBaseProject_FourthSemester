const mongoose = require('mongoose')
const config = require('config')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const SupervisorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    available: { type: Boolean, default: true },

    // reference
    group: { type: Schema.Types.ObjectId },
  },
  {
    timestamps: true,
  }
)

SupervisorSchema.pre('save', async function (next) {
  let supervisor = this

  if (supervisor.isModified('password')) {
    const salt = await bcrypt.genSalt(config.get('saltWorkFactor'))
    const hash = await bcrypt.hash(supervisor.password, salt)
    supervisor.password = hash
  }

  return next()
})

SupervisorSchema.methods.comparePassword = async function (candidatePassword) {
  let supervisor = this
  return bcrypt
    .compare(candidatePassword, supervisor.password)
    .catch(() => false)
}

const SupervisorModel = mongoose.model('Supervisor', SupervisorSchema)

module.exports = SupervisorModel
