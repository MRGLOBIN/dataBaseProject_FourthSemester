const { object, string } = require('zod')

const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    password: string({
      required_error: 'password is required',
    }), // .min(6, "password too short -- should be 6 chars minimum")
    passwordConfirmation: string({
      required_error: 'password Confiramtion is required',
    }),
    email: string({
      required_error: 'email is required',
    }).email('Not a valid email'),
  }).refine(data => data.password === data.passwordConfirmation, {
    message: 'password do not match',
    path: ['passwordConfirmation'],
  }),
})

module.exports = createUserSchema
