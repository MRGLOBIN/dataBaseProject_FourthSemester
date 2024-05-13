import { useContext, useState } from 'react'

import FormInput from '../form-input/form-input.components'
import Button from '../button/button.components'

import './sign-in-form.styles.scss'
import { UserContext } from '../../context/user.context'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFileds, setFormField] = useState(defaultFormFields)

  const { currentUser, setCurrentUser } = useContext(UserContext)

  const { email, password } = formFileds

  const onChangeHandler = event => {
    const { name, value } = event.target
    setFormField({ ...formFileds, [name]: value })
  }

  const resetFormFiled = () => {
    setFormField(defaultFormFields)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const URL = 'http://localhost:1337/api/user/login'

    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formFileds),
    })
      .then(res => res.json())
      .catch(e => console.log(e))

    setCurrentUser(response)
    resetFormFiled()
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
        {/* <div>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {/* Label for the checkbox *
          {/* Display checkbox value * 
          <label className='text-white p-2'>Are you Supervior</label>
          <p>Checkbox value: {isChecked ? 'Checked' : 'Unchecked'}</p>
        </div> */}
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          {/* <Button type='button' buttonType='google'>
            Google
          </Button> */}
        </div>
      </form>
    </div>
  )
}

export default SignInForm
