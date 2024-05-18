import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

import { UserContext } from '../../context/user.context'
import { ProjectContext } from '../../context/project.context'

import UserLoginAndProect from './user-login-project.component'
import UserLoginNotGroup from './user-login-not-group.component'
import UserNotLoginProject from './user-not-login-project.component'
import AdvisorLoginNotProject from './advisor-login-not-project.component'

import { styles } from './project.styles'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

import { useContext, useEffect } from 'react'

const Project = () => {
  const { currentUser } = useContext(UserContext)
  const { projectDescription, setProjectDescription } =
    useContext(ProjectContext)

  useEffect(() => {
    ;(async () => {
      if (!currentUser) {
        return
      }
      const URL = 'http://localhost:1337/api/user/currentproject'
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: currentUser._id }),
      })
        .then(res => res.json())
        .catch(e => console.log(e))
      // console.log(response)

      setProjectDescription(response)
    })()
  }, [currentUser])

  return (
    <>
      {(!currentUser && <UserNotLoginProject project={projectDescription} />) ||
        (currentUser && projectDescription && (
          <UserLoginAndProect project={projectDescription} />
        )) ||
        (currentUser.available && <AdvisorLoginNotProject />) || (
          <UserLoginNotGroup project={projectDescription} />
        )}
    </>
  )
}

export default Project

{
  /* <UserLoginNotGroup project={projectDescription} /> */
}
