import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import Button from '../../components/button/button.components'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

const ProjectTilt = ({
  groupData: { title, desc, _id },
  userId,
  setSupervisor,
}) => {
  const acceptGroup = async () => {
    const URL = 'http://localhost:1337/api/user/acceptgroup'
    const supervisor = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ supervisorID: userId, groupID: _id }),
    })
      .then(res => res.json())
      .catch(e => {
        console.log(e)
      })
    setSupervisor(supervisor)
  }

  return (
    <>
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
            <p>{desc}</p>
          </div>
        </motion.div>
      </Tilt>
      <div className='flex justify-center item-center mt-8 mb-8'>
        <Button buttonType='inverted' onClick={acceptGroup}>
          Accept
        </Button>
      </div>
    </>
  )
}

export default ProjectTilt
