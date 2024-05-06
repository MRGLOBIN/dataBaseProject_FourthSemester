import { useState } from 'react'

import FormInput from '../form-input/form-input.components'
import Button from '../button/button.components'

import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFileds, setFormField] = useState(defaultFormFields)

  const { email, password } = formFileds

  const onChangeHandler = event => {
    const { name, value } = event.target
    setFormField({ ...formFileds, [name]: value })
  }

  const resetFormFiled = () => {
    setFormField(defaultFormFields)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <div className='sign-up-container bg-tertiary pl-10 pr-10'>
      <h1 className='text-white font-black text-xl'>
        Already have an account?
      </h1>
      <span className='text-xs text-secondary uppercase tracking-wider'>
        Sign In with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={onChangeHandler}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={onChangeHandler}
          name='password'
          value={password}
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google'>
            Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
