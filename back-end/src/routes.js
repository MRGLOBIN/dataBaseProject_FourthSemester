const userRouter = require('./routers/user.router')

function routes(app) {
  app.get('/healthcheck', (req, res) => {
    res.sendStatus(200)
  })

  app.use('/api/user', userRouter)
}

module.exports = routes
