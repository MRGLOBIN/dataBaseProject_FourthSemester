const GroupModel = require('./group.mongo')
const StudentModel = require('./student.mongo')
const MileStonrModel = require('./mile-stone.mongo')
const SupervisorModel = require('./supervisor.mongo')

async function createStudent(student) {
  await StudentModel.create(student)
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
  const createdMileStone = await MileStonrModel.create(mileStone)
  await GroupModel.updateOne({ _id: groupId }, { $set: { milestone: groupId } })
}
