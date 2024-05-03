const createUserSchema = require('./schema/user.schema')
const validateResource = require('./middleware/valide-resource')
const { createUserHandler } = require('./controller/user/create-user-handler')

function routes(app) {
  app.get('/healthcheck', (req, res) => {
    res.sendStatus(200)
  })

  app.post('/api/users', validateResource(createUserSchema), createUserHandler)
}

module.exports = routes
