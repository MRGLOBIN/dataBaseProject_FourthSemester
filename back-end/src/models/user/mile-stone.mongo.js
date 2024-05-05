const mongoose = require('mongoose')

const MileStoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
})

const MileStonrModel = mongoose.model('MileStone', MileStoneSchema)

export default MileStonrModel
