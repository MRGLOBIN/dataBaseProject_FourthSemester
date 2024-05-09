import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

import CardTilt from '../../components/card-tilt/card-tilt.component'

import { ProjectContext } from '../../context/project.context'

import { styles } from './project.styles'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

import EarthCanvas from '../../components/canvas/earth-canvas/earth-canvas.components'
import { useContext } from 'react'

const UserNotLoginProject = () => {
  return (
    <div className='flex justify-between'>
      <div className='w-5/12 ml-16 mt-16'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>
            Embark on Effortless Excellence
          </p>
          <h3 className={styles.sectionHeadText}>SIGN IN</h3>
          <br />
          <p className={styles.sectionSubText}>
            Craft Your Project Masterpiece
          </p>

          <p className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium '>
            Step into a realm where project management transcends mere
            functionality, where each interaction with your final year project
            becomes a symphony of refinement and finesse. Our Final Year Project
            Dashboard isn't just a tool; it's a canvas upon which you'll paint
            your journey to distinction. Seamlessly navigate the complexities of
            project execution with our meticulously designed platform, where
            every task, deadline, and collaboration is orchestrated with
            elegance and precision.
          </p>
        </motion.div>
      </div>
      <div className='w-5/12 h-[600px] mr-12'>
        <EarthCanvas />
      </div>
    </div>
  )
}

const UserLoginNotGroup = () => {
  return (
    <div className='flex justify-between'>
      <div className=' w-4/5 ml-16 mt-16'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>A New Way To Explore</p>
          <h3 className={styles.sectionHeadText}>Create</h3>
          <br />
          <p className={styles.sectionSubText}>Achieve With Team</p>

          <p className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium '>
            Create or Join a Group to, Join the journey Ahead
          </p>
          <label className='text-white'>C</label>
        </motion.div>
      </div>
    </div>
  )
}

const UserLoginAndProect = ({
  project: { title, desc, gmem1, gmem2, gmem3, superVisor, status },
}) => {
  return (
    <div className='flex justify-between'>
      <div className=' w-4/5 ml-16 mt-16'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>The Journey So Far</p>
          <h3 className={styles.sectionHeadText}>{title}</h3>
          <br />
          <p className={styles.sectionSubText}>{superVisor}</p>

          <p className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium '>
            {desc}
          </p>
        </motion.div>
        <br />
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>
            teamwork and intelligence win championships
          </p>
          <h3 className={styles.sectionHeadText}>Group</h3>
          <br />

          <div>
            <CardTilt index={0} mem={gmem1} />
            <div className='flex justify-between content-between'>
              <CardTilt index={1} mem={gmem2} />
              <CardTilt index={2} mem={gmem3} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const Project = () => {
  const { projectDescription } = useContext(ProjectContext)
  return (
    <>
      <UserLoginAndProect project={projectDescription} />
    </>
  )
}

export default Project
