const { omit } = require('loadsh')

const logger = require('../../utils/logger')
const { createStudent } = require('../../service/user.service')

async function createStudentHandler(req, res) {
  try {
    const user = await createStudent(req.body)
    return res.send(omit(user.toJSON(), 'password'))
  } catch (error) {
    logger.error(error)
    return res.status(409).send(error.message)
  }
}

module.exports = {
  createStudentHandler,
}
