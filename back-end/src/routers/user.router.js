const express = require('express')

const validateResource = require('../middleware/valide-resource.js')
const {
  createUserSchema,
  loginUserSchema,
} = require('../schema/user.schema.js')

const {
  loginUserHandler,
  acceptGroupHandler,
  getCurrentGroup,
} = require('../controller/user/login-user-handler.controller.js.js')
const {
  createStudentHandler,
  createSupervisorHandler,
  createProjectHandler,
} = require('../controller/user/create-user-handler.controller.js')

const {
  searchAvailabeGroupsHandler,
} = require('../controller/user/search-user-handler.controller.js')

const userRouter = express.Router()

userRouter.get('/searchgroups', searchAvailabeGroupsHandler)

userRouter.post('/currentproject', getCurrentGroup)

userRouter.post('/acceptgroup', acceptGroupHandler)

userRouter.post(
  '/create/student',
  validateResource(createUserSchema),
  createStudentHandler
)

userRouter.post('/create/supervisor', createSupervisorHandler)

userRouter.post('/create/project', createProjectHandler)

userRouter.post('/create/milestone', () => {})

userRouter.post('/login', validateResource(loginUserSchema), loginUserHandler)

module.exports = userRouter
