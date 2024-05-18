const { omit } = require('loadsh')

const logger = require('../../utils/logger')
const {
  loginUser,
  acceptGroup,
  searchCurrentProject,
} = require('../../service/user.service')

async function loginUserHandler(req, res) {
  try {
    const user = await loginUser(req.body)
    if (!user) {
      return res.sendStatus(400)
    }

    return res.send(omit(user.toJSON(), 'password'))
  } catch (error) {
    logger.error(error)
    return res.status(409).send(error.message)
  }
}

async function getCurrentGroup(req, res) {
  const { _id } = req.body
  const currentGroup = await searchCurrentProject(_id)
  res.send(currentGroup)
}

async function acceptGroupHandler(req, res) {
  const { supervisorID, groupID } = req.body
  const supervisor = await acceptGroup(supervisorID, groupID)
  res.send(omit(supervisor.toJSON(), 'password'))
}

module.exports = {
  loginUserHandler,
  getCurrentGroup,
  acceptGroupHandler,
}
