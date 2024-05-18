import { useContext, useState } from 'react'

import Button from '../../components/button/button.components'
import FormInput from '../../components/form-input/form-input.components'
import { ProjectContext } from '../../context/project.context'

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

  const { setProjectDescription, projectDescription } =
    useContext(ProjectContext)

  const { title, desc, gmem1, gmem2, gmem3, idGmem1, idGmem2, idGmem3 } =
    formFileds

  const onChangeHandler = event => {
    const { name, value } = event.target
    setFormField({ ...formFileds, [name]: value })
  }

  const resetFormFiled = () => {
    setFormField(defaultFormFields)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const URL = 'http://localhost:1337/api/user/create/project'

    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formFileds),
    })
      .then(res => res.json())
      .catch(e => console.log(e))

    setProjectDescription(response)
    resetFormFiled()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Project Title'
          type='text'
          required
          onChange={onChangeHandler}
          name='title'
          value={title}
        />
        <FormInput
          label='Description'
          type='text'
          required
          onChange={onChangeHandler}
          name='desc'
          value={desc}
        />
        <FormInput
          label='Team Member 1'
          type='text'
          required
          onChange={onChangeHandler}
          name='gmem1'
          value={gmem1}
        />
        <FormInput
          label='ID Team Member 1'
          type='text'
          required
          onChange={onChangeHandler}
          name='idGmem1'
          value={idGmem1}
        />
        <FormInput
          label='Team Member 2'
          type='text'
          required
          onChange={onChangeHandler}
          name='gmem2'
          value={gmem2}
        />
        <FormInput
          label='ID Team Member 2'
          type='text'
          required
          onChange={onChangeHandler}
          name='idGmem2'
          value={idGmem2}
        />
        <FormInput
          label='Team Member 3'
          type='text'
          required
          onChange={onChangeHandler}
          name='gmem3'
          value={gmem3}
        />
        <FormInput
          label='ID Team Member 3'
          type='text'
          required
          onChange={onChangeHandler}
          name='idGmem3'
          value={idGmem3}
        />
        <div className='buttons-container'>
          <Button type='submit'>Create</Button>
        </div>
      </form>
    </>
  )
}

export default CreateGroupForm
