import { motion } from 'framer-motion'

import CreateGroupForm from './create-group-form.component'
import EarthCanvas from '../../components/canvas/earth-canvas/earth-canvas.components'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

import { styles } from './project.styles'

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
          <br />

          <CreateGroupForm />
        </motion.div>
      </div>
    </div>
  )
}

export default UserLoginNotGroup
