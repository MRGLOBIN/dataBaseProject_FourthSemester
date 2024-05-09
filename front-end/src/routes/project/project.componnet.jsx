import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

import CreateGroupForm from './create-group-form.component'
import UserLoginNotGroup from './user-login-not-group.component'
import UserNotLoginProject from './user-not-login-project.component'
import UserLoginAndProect from './user-login-project.component'

import { ProjectContext } from '../../context/project.context'

import { styles } from './project.styles'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

import { useContext } from 'react'

const Project = () => {
  const { projectDescription } = useContext(ProjectContext)
  return (
    <>
      <UserLoginNotGroup project={projectDescription} />
    </>
  )
}

export default Project
