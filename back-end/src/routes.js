const createUserSchema = require('./schema/user.schema')
const createUserHandler = require('./controller/user/create-user-handler')
const validateResource = require('./middleware/valide-resource')

function routes(app) {
  app.get('/healthcheck', (req, res) => {
    res.sendStatus(200)

    app.post('/api/user', validateResource(createUserSchema), createUserHandler)
  })
}

module.exports = routes
