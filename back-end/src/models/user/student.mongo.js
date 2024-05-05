const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const config = require('config')

const Schema = mongoose.Schema

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // reference
    group: { type: Schema.Types.ObjectId, ref: 'Group' },
  },
  {
    timestamps: true,
  }
)

// cant find type for next function, in mongoose 6 this has type mongoose.HooksNextFunction
StudentSchema.pre('save', async function (next) {
  let student = this

  if (student.isModified('password')) {
    const salt = await bcrypt.genSalt(config.get('saltWorkFactor'))
    const hash = await bcrypt.hash(student.password, salt)
    student.password = hash
  }

  return next()
})

StudentSchema.methods.comparePassword = async function (candidatePassowrd) {
  let student = this
  return bcrypt.compare(candidatePassowrd, student.password).catch(() => false)
}

const StudentModel = mongoose.model('User', StudentSchema)

module.exports = StudentModel
