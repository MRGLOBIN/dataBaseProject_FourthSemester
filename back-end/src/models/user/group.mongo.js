const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  gmem1: { type: String, required: true },
  gmem2: { type: String, required: true },
  gmem3: { type: String, required: true },
  idGmem1: { type: Number, required: true },
  idGmem2: { type: Number, required: true },
  idGmem3: { type: Number, required: true },
  supervisor: { type: String },
  // status: { type: String },

  // reference
  milestone: [{ type: Schema.Types.ObjectId, ref: 'MileStone' }],
})

const projectModel = mongoose.model('project', projectSchema)

module.exports = projectModel
