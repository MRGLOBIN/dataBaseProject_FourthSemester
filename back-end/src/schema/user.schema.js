const { object, string } = require('zod')

const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    password: string({
      required_error: 'password is required',
    }), // .min(6, "password too short -- should be 6 chars minimum")
    email: string({
      required_error: 'email is required',
    }).email('Not a valid email'),
  }),
})

const loginUserSchema = object({
  body: object({
    email: string({
      required_error: 'email is required',
    }).email('Not a valid email'),
    password: string({
      required_error: 'password is required',
    }),
  }),
})

module.exports = { createUserSchema, loginUserSchema }
