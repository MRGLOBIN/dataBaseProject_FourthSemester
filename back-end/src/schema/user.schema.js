const { object, string, number, boolean } = require('zod')

const stringToNumber = value => {
  const parsedValue = parseInt(value)
  if (isNaN(parsedValue)) {
    throw new Error('Value must be a number')
  }
  return parsedValue
}

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
    id: string({
      required_error: 'id is required',
    }),
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
