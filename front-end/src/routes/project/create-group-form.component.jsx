import { useState } from 'react'

import Button from '../../components/button/button.components'
import FormInput from '../../components/form-input/form-input.components'

const defaultFormFields = {
  title: '',
  desc: '',
  gmem1: '',
  gmem2: '',
  gmem3: '',
  idGmem1: '',
  idGmem2: '',
  idGmem3: '',
}

const CreateGroupForm = () => {
  const [formFileds, setFormField] = useState(defaultFormFields)
  const { title, desc, gmem1, gmem2, gmem3, idGmem1, idGmem2, idGmem3 } =
    formFileds

  const onChangeHandler = event => {
    const { name, value } = event.target
    setFormField({ ...formFileds, [name]: value })

    const resetFormFiled = () => {
      setFormField(defaultFormFields)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Project Title'
          type='text'
          required
          onChange={onChangeHandler}
          name='ProjectTitle'
          value={title}
        />
        <FormInput
          label='Description'
          type='text'
          required
          onChange={onChangeHandler}
          name='description'
          value={desc}
        />
        <FormInput
          label='Team Member 1'
          type='text'
          required
          onChange={onChangeHandler}
          name='mem1'
          value={gmem1}
        />
        <FormInput
          label='ID Team Member 1'
          type='text'
          required
          onChange={onChangeHandler}
          name='mem1'
          value={idGmem1}
        />
        <FormInput
          label='Team Member 2'
          type='text'
          required
          onChange={onChangeHandler}
          name='mem 2'
          value={gmem2}
        />
        <FormInput
          label='ID Team Member 2'
          type='text'
          required
          onChange={onChangeHandler}
          name='mem1'
          value={idGmem2}
        />
        <FormInput
          label='Team Member 3'
          type='text'
          required
          onChange={onChangeHandler}
          name='mem 3'
          value={gmem3}
        />
        <FormInput
          label='ID Team Member 3'
          type='text'
          required
          onChange={onChangeHandler}
          name='mem1'
          value={idGmem3}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
        </div>
      </form>
    </>
  )
}

export default CreateGroupForm
