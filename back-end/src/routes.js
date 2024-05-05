const { createUserSchema, loginUserSchema } = require('./schema/user.schema')

const validateResource = require('./middleware/valide-resource')
const {
  loginUserHandler,
} = require('./controller/user/login-user-handler.controller.js')
const {
  createUserHandler,
} = require('./controller/user/create-user-handler.controller')

function routes(app) {
  app.get('/healthcheck', (req, res) => {
    res.sendStatus(200)
  })

  app.post(
    '/api/user/create',
    validateResource(createUserSchema),
    createUserHandler
  )

  app.post(
    '/api/user/login',
    validateResource(loginUserSchema),
    loginUserHandler
  )
}

module.exports = routes
