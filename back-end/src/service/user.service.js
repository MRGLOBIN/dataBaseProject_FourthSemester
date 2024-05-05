const UserModel = require('../models/user/user.model')

async function createUser(input) {
  try {
    return await UserModel.create(input)
  } catch (error) {
    throw new Error(error)
  }
}

async function loginUser({ email, password }) {
  const user = await UserModel.findOne({ email })

  if (!user) {
    return { error: 'email not found' }
  }
  const isMatch = await user.comparePassword(password)

  if (!isMatch) {
    return { error: 'invalid password' }
  }

  return user
}

module.exports = {
  createUser,
  loginUser,
}
