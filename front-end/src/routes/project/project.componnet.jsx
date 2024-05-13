import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

import { UserContext } from '../../context/user.context'
import { ProjectContext } from '../../context/project.context'

import UserNotLoginProject from './user-not-login-project.component'
import UserLoginNotGroup from './user-login-not-group.component'
import UserLoginAndProect from './user-login-project.component'

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
  const { currentUser } = useContext(UserContext)
  const { projectDescription } = useContext(ProjectContext)

  return (
    <>
      {(!currentUser && <UserNotLoginProject project={projectDescription} />) ||
        (currentUser && projectDescription && (
          <UserLoginAndProect project={projectDescription} />
        )) ||
        (currentUser && <UserLoginNotGroup project={projectDescription} />)}
    </>
  )
}

export default Project

{
  /* <UserLoginNotGroup project={projectDescription} /> */
}
