import { motion } from 'framer-motion'

import UserNotLoginMilestone from './user-not-login.component'
import StudentLoginMilestone from './student-login-miltstone.component'
import SupervisorLoginMilestone from './supervisor-login-milestone.component'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

import './milestone.styles.scss'
import { useContext, useEffect } from 'react'
import { ProjectContext } from '../../context/project.context'
import { MilestoneContext } from '../../context/ milestone.context'
import { UserContext } from '../../context/user.context'

const Milestone = () => {
  const { currentUser } = useContext(UserContext)
  const { projectDescription } = useContext(ProjectContext)
  const { setMilestones } = useContext(MilestoneContext)

  useEffect(() => {
    ;(async () => {
      const URL = 'http://localhost:1337/api/user/search/milestone'
      if (!projectDescription) {
        return
      }
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ groupID: projectDescription._id }),
      })
        .then(res => res.json())
        .catch(e => console.log(e))
      setMilestones(response)
    })()
  }, [])

  return (
    <>
      {(currentUser?.available === false && <SupervisorLoginMilestone />) ||
        (currentUser && <StudentLoginMilestone />) || <UserNotLoginMilestone />}
    </>
  )
}

export default Milestone
