const config = require('config')
const mongoose = require('mongoose')

const logger = require('./logger')

async function connect() {
  const DB_URI = config.get('DB_URI')

  try {
    await mongoose.connect(DB_URI)
    logger.info('Connected to database')
  } catch (error) {
    logger.error(`Could not connect to db Error:${error}`)
    logger.error('Shutting down')
    process.exit(1)
  }
}

module.exports = connect
