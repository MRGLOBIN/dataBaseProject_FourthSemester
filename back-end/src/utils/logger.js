const pino = require('pino')

const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
})

module.exports = logger
