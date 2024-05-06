const GroupModel = require('./group.mongo')
const StudentModel = require('./student.mongo')
const MileStoneModel = require('./mile-stone.mongo')
const SupervisorModel = require('./supervisor.mongo')

async function createStudent(student) {
  return await StudentModel.create(student)
}

async function createGroup(group, studentIds) {
  const createdGroup = await GroupModel.create(group)
  const updateOperation = {
    $set: { group: createdGroup._id },
  }

  await StudentModel.updateMany({ _id: { $in: studentIds } }, updateOperation)

  return createdGroup
}

async function createMileStone(mileStone, groupId) {
  const createdMileStone = await MileStoneModel.create(mileStone)
  await GroupModel.findOneAndUpdate(
    { _id: groupId },
    { $set: { milestone: groupId } }
  )

  return createdMileStone
}
