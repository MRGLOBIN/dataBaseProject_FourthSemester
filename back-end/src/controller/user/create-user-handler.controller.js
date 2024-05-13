const { omit } = require('loadsh')

const logger = require('../../utils/logger')
const {
  createStudent,
  createSupervisor,
  createProject,
} = require('../../service/user.service')

async function createStudentHandler(req, res) {
  try {
    const user = await createStudent(req.body)
    return res.send(omit(user.toJSON(), 'password'))
  } catch (error) {
    logger.error(error)
    return res.status(409).send(error.message)
  }
}

async function createSupervisorHandler(req, res) {
  try {
    const user = await createSupervisor(req.body)
    return res.send(omit(user.toJSON(), 'password'))
  } catch (error) {
    logger.error(error)
    return res.status(409).send(error.message)
  }
}

async function createProjectHandler(req, res) {
  try {
    const createdProject = await createProject(req.body)
    return res.send(createdProject)
  } catch (error) {
    logger.error(error)
    return res.status(400).send(error.message)
  }
}

module.exports = {
  createStudentHandler,
  createSupervisorHandler,
  createProjectHandler,
}
