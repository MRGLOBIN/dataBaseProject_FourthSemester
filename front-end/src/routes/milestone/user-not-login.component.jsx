import { motion } from 'framer-motion'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

import EarthCanvas from '../../components/canvas/earth-canvas/earth-canvas.components'

const UserNotLoginMilestone = () => {
  return (
    <div className='flex justify-between'>
      <div className='w-5/12 ml-16 mt-16'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
            A Journey of Achievem
          </p>
          <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            SIGN IN
          </h3>
          <br />
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>
            Charting the Course to Success
          </p>

          <p className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium '>
            Enter a journey where each milestone serves as a testament to your
            dedication and foresight, marking tangible progress. Within our
            Final Year Project Dashboard, the navigation of these pivotal
            moments evolves into a refined process—an intricate balance between
            ambitious goals and tangible achievements.
          </p>
        </motion.div>
      </div>
      <div className='w-5/12 h-[600px] mr-12'>
        <EarthCanvas />
      </div>
    </div>
  )
}

export default UserNotLoginMilestone
