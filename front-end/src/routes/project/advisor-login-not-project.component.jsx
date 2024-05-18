import { useContext, useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import { UserContext } from '../../context/user.context'

import ProjectTilt from '../../components/card-tilt/project-tilt.component'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

import { styles } from './project.styles'

const AdvisorLoginNotProject = () => {
  const [availabeGroups, setAvailabeGroups] = useState(null)
  const { currentUser, setCurrentUser } = useContext(UserContext)

  useEffect(() => {
    ;(async () => {
      const URL = 'http://localhost:1337/api/user/searchgroups'
      const response = await fetch(URL, {
        method: 'GET',
      })
        .then(res => res.json())
        .catch(e => console.log(e))
      console.log('advisor : ', response)
      if (!response) {
        return
      }
      const availabeGroupsData = response.map(item => ({
        title: item.title,
        desc: item.desc,
        _id: item._id,
      }))
      setAvailabeGroups(availabeGroupsData)
    })()
  }, [])

  const setSupervisor = supervisor => {
    setCurrentUser(supervisor)
  }

  return (
    <div className='ml-8 mr-8'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Please Select</p>
        <h3 className={styles.sectionHeadText}>Group</h3>
        <br />
        <p className={styles.sectionSubText}>To Work With</p>

        <div className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium '>
          {availabeGroups &&
            availabeGroups.map(groupData => (
              <ProjectTilt
                groupData={groupData}
                userId={currentUser._id}
                setSupervisor={setSupervisor}
                key={groupData._id}
              />
            ))}
        </div>
      </motion.div>
    </div>
  )
}

export default AdvisorLoginNotProject
