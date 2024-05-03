const express = require('express')
const config = require('config')

const routes = require('./routes')
const connect = require('./utils/connect-to-db.js')
const logger = require('./utils/logger.js')

const PORT = config.get('PORT')

const app = express()

app.use(express.json())

app.listen(PORT, async () => {
  await connect()
  routes(app)
  logger.info(`App is listening on PORT:${PORT}`)
})
