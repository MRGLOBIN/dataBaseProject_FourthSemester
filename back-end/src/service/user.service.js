const UserModel = require('../models/user/user.model')

async function createUser(input) {
  try {
    return await UserModel.create(input)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  createUser,
}
