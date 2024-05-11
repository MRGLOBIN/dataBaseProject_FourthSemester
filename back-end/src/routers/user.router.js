const express = require('express')

const validateResource = require('../middleware/valide-resource.js')
const {
  createUserSchema,
  loginUserSchema,
} = require('../schema/user.schema.js')

const {
  loginUserHandler,
} = require('../controller/user/login-user-handler.controller.js.js')
const {
  createStudentHandler,
} = require('../controller/user/create-user-handler.controller.js')

const userRouter = express.Router()

userRouter.post(
  '/create/student',
  validateResource(createUserSchema),
  createStudentHandler
)

userRouter.post('/login', validateResource(loginUserSchema), loginUserHandler)

module.exports = userRouter
