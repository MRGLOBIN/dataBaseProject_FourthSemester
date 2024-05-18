import { useContext, useState } from 'react'

import { motion } from 'framer-motion'

import Button from '../../components/button/button.components'
import FormInput from '../../components/form-input/form-input.components'
import MilestoneCard from '../../components/milestone-card/mile-stone-card.component'

import { slideIn } from '../../utils/framer-motion/motion'

import { styles } from '../../routes/project/project.styles'
import { MilestoneContext } from '../../context/ milestone.context'
import { ProjectContext } from '../../context/project.context'

const SupervisorLoginMilestone = () => {
  const [showForm, setShowForm] = useState(false)

  const { milestones } = useContext(MilestoneContext)

  const addMilestonehandler = () => {
    setShowForm(!showForm)
  }

  return (
    <div className='flex flex-col w-3/5 items-center min-h-[85vh] mx-auto'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <Button buttonType={'inverted'} onClick={addMilestonehandler}>
          {!showForm ? 'ADD MILESTONE' : 'SHOW MILESTONES'} hello
        </Button>
        {showForm && <MilestoneForm />}
        {!showForm &&
          milestones &&
          milestones.map(milestone => (
            <MilestoneCard key={milestone.id} milestone={milestone} />
          ))}
      </motion.div>
    </div>
  )
}

const defaultFormFields = {
  deadline: '',
  title: '',
  subHeading: '',
  desc: '',
}

const MilestoneForm = () => {
  const [formFileds, setFormField] = useState(defaultFormFields)

  const { milestones, setMilestones } = useContext(MilestoneContext)
  const { projectDescription } = useContext(ProjectContext)

  const { deadline, title, subHeading, desc } = formFileds

  const onChangeHandler = event => {
    const { name, value } = event.target
    setFormField({ ...formFileds, [name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (!projectDescription) {
      return
    }

    const URL = 'http://localhost:1337/api/user/create/milestone'
    const payload = { groupID: projectDescription._id, ...formFileds }

    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...payload }),
    })
      .then(res => res.json())
      .catch(e => console.log(e))
    milestones.unshift(response)
    setMilestones(milestones)
  }

  return (
    <div className='text-white w-4/5'>
      <h3 className={`${styles.sectionHeadText} mt-4`}>
        Welcome To Achieve More
      </h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Dead Line'
          type='text'
          required
          onChange={onChangeHandler}
          name='deadline'
          value={deadline}
        />
        <FormInput
          label='Title'
          type='text'
          required
          onChange={onChangeHandler}
          name='title'
          value={title}
        />
        <FormInput
          label='Sub Heading'
          type='text'
          required
          onChange={onChangeHandler}
          name='subHeading'
          value={subHeading}
        />
        <FormInput
          label='Description'
          type='text'
          required
          onChange={onChangeHandler}
          name='desc'
          value={desc}
        />
        <Button type='submit'>Create</Button>
      </form>
    </div>
  )
}

export default SupervisorLoginMilestone
