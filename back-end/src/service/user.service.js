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

async function createProject(group) {
  const createdProject = await projectModel.create(group)

  const studentIDs = [
    createdProject.idgmem1,
    createdProject.idgmem2,
    createdProject.idgmem3,
  ]

  const updateOperation = {
    $set: { group: createdProject._id },
  }

  await studentModel.updateMany({ id: { $in: studentIDs } }, updateOperation)

  return createdProject
}

async function loginUser({ email, password }) {
  let user = await studentModel.findOne({ email })

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
  console.log(user)
  return user
}

async function acceptGroup(supervisorID, groupID) {
  const supervisor = await SupervisorModel.findOneAndUpdate(
    { _id: supervisorID },
    { $set: { group: groupID, available: false } },
    { new: true }
  )
  await projectModel.findOneAndUpdate(
    { _id: groupID },
    { $set: { supervisor: supervisor.name } }
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
