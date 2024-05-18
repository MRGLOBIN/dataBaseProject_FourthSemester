const { omit } = require('loadsh')

const logger = require('../../utils/logger')
const {
  createStudent,
  createSupervisor,
  createProject,
  createMileStone,
  searchAllMilestone,
} = require('../../service/user.service')
const { Error } = require('mongoose')

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

async function createMilestonHandler(req, res) {
  try {
    const { groupID, ...milestone } = req.body
    const createdMilestone = await createMileStone({ groupID, milestone })
    res.send(createdMilestone)
  } catch (e) {
    logger.error(e)
    return res.status(400)
  }
}

async function getAllMilestoneHandler(req, res) {
  try {
    const mileStones = await searchAllMilestone(req.body)
    res.send(mileStones)
  } catch (e) {
    logger.error(e)
    res.sendStatus(400)
  }
}

module.exports = {
  createStudentHandler,
  createSupervisorHandler,
  createProjectHandler,
  createMilestonHandler,
  getAllMilestoneHandler,
}
