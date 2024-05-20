import { motion } from 'framer-motion'

import EarthCanvas from '../../components/canvas/earth-canvas/earth-canvas.components'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

import { styles } from './project.styles'

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
          Step into a space where project management is streamlined and efficient. 
          Our Final Year Project Dashboard is not just a tool, but a well-crafted platform designed
          to support your journey to success. Easily manage the complexities of project execution 
          with a system that ensures every task, deadline, and collaboration is handled with clarity
          and precision.
          </p>
        </motion.div>
      </div>
      <div className='w-5/12 h-[600px] mr-12'>
        <EarthCanvas />
      </div>
    </div>
  )
}

export default UserNotLoginProject
