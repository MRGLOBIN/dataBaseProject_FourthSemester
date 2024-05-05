const { omit } = require('loadsh')

const logger = require('../../utils/logger')
const { loginUser } = require('../../service/user.service')

async function loginUserHandler(req, res) {
  try {
    const user = await loginUser(req.body)
    if (user.error) {
      return res.send(user)
    }

    const { email, name } = user
    const sendUser = { name, email }
    return res.send(sendUser)
  } catch (error) {
    logger.error(error)
    return res.status(409).send(error.message)
  }
}

module.exports = {
  loginUserHandler,
}
