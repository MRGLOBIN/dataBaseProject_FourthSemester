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

const Milestone = () => {
  return (
    <>
      <SupervisorLoginMilestone />
    </>
  )
}

export default Milestone
