const mongoose = require('mongoose')

const MileStoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
})

const MileStoneModel = mongoose.model('MileStone', MileStoneSchema)

export default MileStoneModel
