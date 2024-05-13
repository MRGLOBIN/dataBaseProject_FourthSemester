import { useContext, useState } from 'react'

import FormInput from '../form-input/form-input.components'

import Button from '../button/button.components'

import './sign-up-form.styles.scss'
import { UserContext } from '../../context/user.context'

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  id: '',
}

const SignupForm = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [formFileds, setFormField] = useState(defaultFormFields)

  const { setCurrentUser } = useContext(UserContext)

  const { name, email, password, id } = formFileds

  const onChangeHandler = event => {
    const { name, value } = event.target
    setFormField({ ...formFileds, [name]: value })
  }

  const resetFormFiled = () => {
    setFormField(defaultFormFields)
  }

  const handleCheckboxChange = event => {
    setIsChecked(event.target.checked)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    let URL
    if (isChecked) {
      URL = 'http://localhost:1337/api/user/create/supervisor'
    } else {
      URL = 'http://localhost:1337/api/user/create/student'
    }

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
  }

  return (
    <div className='sign-up-container bg-tertiary pl-10 pr-10 pb-10'>
      <h2 className='text-white font-black text-xl'>Don't have an account?</h2>
      <span className='text-xs text-secondary uppercase tracking-wider'>
        Sign up with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={onChangeHandler}
          name='name'
          value={name}
        />

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

        {!isChecked && (
          <FormInput
            label='REG ID'
            type='password'
            required
            onChange={onChangeHandler}
            name='id'
            value={id}
          />
        )}
        <div>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {/* Label for the checkbox */}
          {/* Display checkbox value */}
          <label className='text-white p-2'>Are you Supervior</label>
          <p>Checkbox value: {isChecked ? 'Checked' : 'Unchecked'}</p>
        </div>
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignupForm
