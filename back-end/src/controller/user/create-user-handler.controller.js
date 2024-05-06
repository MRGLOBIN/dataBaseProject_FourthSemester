const { omit } = require('loadsh')
const logger = require('../../utils/logger')
const { createUser } = require('../../service/user.service')

async function createUserHandler(req, res) {
  try {
    const user = await createUser(req.body)
    return res.send(omit(user.toJSON(), 'password'))
  } catch (error) {
    logger.error(error)
    return res.status(409).send(error.message)
  }
}

module.exports = {
  createUserHandler,
}
