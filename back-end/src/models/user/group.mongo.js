const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GroupSchema = new mongoose.Schema({
  name: { type: string, required: true },
  stats: { type: Boolean, required: true },

  // reference
  milestone: [{ type: Schema.Types.ObjectId, ref: 'MileStone' }],
})

const GroupModel = mongoose.model('Group', GroupSchema)

export default GroupModel
