// initialize-counter.js
const mongoose = require('mongoose')
const config = require('config')

const Counter = require('../src/models/user/milestone-counter.model') // Import the Counter model

const DB_URI = config.get('DB_URI')

mongoose.connect(DB_URI)

const initializeCounter = async () => {
  try {
    const counter = await Counter.create({ name: 'milestoneId', seq: 0 })
    console.log('Counter initialized')
    mongoose.connection.close()
  } catch (err) {
    console.error('Error initializing counter:', err)
    mongoose.connection.close()
  }
}

initializeCounter()
