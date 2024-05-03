const express = require('express')
const config = require('config')

const routes = require('./routes')
const logger = require('./utils/logger.js')

const PORT = config.get('PORT')

const app = express()

app.use(express.json())

app.listen(PORT, () => {
  routes(app)
  logger.info(`App is listening on PORT:${PORT}`)
})
