const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  gmem1: { type: String, required: true },
  gmem2: { type: String, required: true },
  gmem3: { type: String, required: true },
  idgmem1: { type: Number, required: true },
  idgmem2: { type: Number, required: true },
  idgmem3: { type: Number, required: true },
  supervisor: { type: String },
  // status: { type: String },

  // reference
  milestone: [{ type: Schema.Types.ObjectId, ref: 'MileStone' }],
})

const projectModel = mongoose.model('project', projectSchema)

module.exports = projectModel
