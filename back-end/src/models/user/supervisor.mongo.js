const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SupervisorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  available: { type: Boolean, required: true },

  // reference
  group: { type: Schema.Types.ObjectId },
})

const SupervisorModel = mongoose.model('Supervisor', SupervisorSchema)

export default SupervisorModel
