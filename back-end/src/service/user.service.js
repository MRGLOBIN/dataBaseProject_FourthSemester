const studentModel = require('../models/user/student.mongo')
const SupervisorModel = require('../models/user/supervisor.mongo')
const projectModel = require('../models/user/group.mongo')
const MileStoneModel = require('../models/user/mile-stone.mongo')

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
    createdProject.idGmem1,
    createdProject.idGmem2,
    createdProject.idGmem3,
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
    return null
  }

  const isMatch = await user.comparePassword(password)

  if (!isMatch) {
    return null
  }
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

async function searchCurrentProject(_id) {
  let project = await studentModel.findOne({ _id }).populate('group').exec()

  if (!project) {
    project = await SupervisorModel.findOne({ _id }).populate('group').exec()
  }

  if (!project) {
    return null
  }

  return project.group
}

async function searchAvailabeGroups() {
  const availableGroups = await projectModel.find({
    supervisor: { $exists: false },
  })

  return availableGroups
}

async function createMileStone({ groupID, milestone }) {
  const createdMilestone = await MileStoneModel.create(milestone)

  await projectModel.findOneAndUpdate(
    { _id: groupID },
    { $push: { milestone: createdMilestone._id } }
  )
  return createdMilestone
}

async function searchAllMilestone({ groupID }) {
  const Allprojects = await projectModel
    .findOne({ _id: groupID })
    .populate('milestone')
    .exec()

  const { milestone } = Allprojects

  return milestone
}

module.exports = {
  createStudent,
  createSupervisor,
  loginUser,
  createProject,
  acceptGroup,
  searchCurrentProject,
  searchAvailabeGroups,
  createMileStone,
  searchAllMilestone,
}
