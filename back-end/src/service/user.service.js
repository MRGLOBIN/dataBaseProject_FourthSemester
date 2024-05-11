const studentModel = require('../models/user/student.mongo')
const SupervisorModel = require('../models/user/supervisor.mongo')
const projectModel = require('../models/user/group.mongo')

async function createStudent(input) {
  try {
    return await studentModel.create(input)
  } catch (error) {
    throw new Error(error)
  }
}

async function createSupervisor(input) {
  try {
    return await SupervisorModel.create(input)
  } catch (error) {
    throw new Error(error)
  }
}

async function createProject(group, studentIds) {
  const createdProject = await projectModel.create(group)
  const updateOperation = {
    $set: { group: createdGroup._id },
  }

  await studentModel.updateMany({ id: { $in: studentIds } }, updateOperation)

  return createdProject
}

async function loginUser({ email, password }) {
  const user = await studentModel.findOne({ email })

  if (!user) {
    user = await SupervisorModel.findOne({ email })
  }

  if (!user) {
    return { error: 'email not found' }
  }

  const isMatch = await user.comparePassword(password)

  if (!isMatch) {
    return { error: 'invalid password' }
  }

  return user
}

async function acceptGroup(supervisorID, groupID) {
  const supervisor = await SupervisorModel.findOneAndUpdate(
    { _id: supervisorID },
    { $set: { group: groupID, available: false } },
    { new: true }
  )

  return supervisor
}

async function searchAvailabeGroups() {
  const availableGroups = await projectModel.find({
    supervisor: { $exists: false },
  })

  return availableGroups
}

module.exports = {
  createStudent,
  createSupervisor,
  loginUser,
  createProject,
  acceptGroup,
  searchAvailabeGroups,
}
