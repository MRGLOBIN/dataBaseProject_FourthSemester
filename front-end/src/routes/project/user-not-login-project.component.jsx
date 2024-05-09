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

export default UserNotLoginProject
