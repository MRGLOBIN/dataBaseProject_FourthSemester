const mongoose = require('mongoose')

const Counter = require('./milestone-counter.model')

const MileStoneSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  deadline: { type: String, required: true },
  desc: { type: String, required: true },
  subHeading: { type: String, required: true },
})

MileStoneSchema.pre('save', async function (next) {
  if (this.isNew) {
    try {
      const counter = await Counter.findOneAndUpdate(
        { name: 'milestoneId' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      )
      this.id = counter.seq
      next()
    } catch (err) {
      next(err)
    }
  } else {
    next()
  }
})

const MileStoneModel = mongoose.model('MileStone', MileStoneSchema)

module.exports = MileStoneModel
