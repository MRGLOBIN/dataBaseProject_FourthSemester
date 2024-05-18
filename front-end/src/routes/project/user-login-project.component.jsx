import { motion } from 'framer-motion'

import CardTilt from '../../components/card-tilt/card-tilt.component'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

import { styles } from './project.styles'

const UserLoginAndProect = ({
  project: { title, desc, gmem1, gmem2, gmem3, supervisor },
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
          <p className={styles.sectionSubText}>{supervisor}</p>

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

export default UserLoginAndProect
