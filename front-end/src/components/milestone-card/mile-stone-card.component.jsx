import { useContext } from 'react'

import { motion } from 'framer-motion'

import CardTilt from '../../components/card-tilt/card-tilt.component'

import { styles } from '../../routes/project/project.styles'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

const MilestoneCard = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-full mt-6 mb-6'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-tertiary p-8 rounded-2xl shadow-milestone'
        >
          <p className={styles.sectionSubText}>26 may</p>
          <h3 className={styles.sectionHeadText}>inferface</h3>
          <br />
          <p className={styles.sectionSubText}>goblin</p>

          <p className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium '>
            get all the description goes here and no where else
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default MilestoneCard
