import { motion } from 'framer-motion'

import BUTTON from '../../components/button/button.components'
import MilestoneCard from '../../components/milestone-card/mile-stone-card.component'

import { slideIn } from '../../utils/framer-motion/motion'

const SupervisorLoginMilestone = () => {
  return (
    <div className='flex flex-col w-3/5 items-center min-h-[85vh] mx-auto'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <BUTTON buttonType={'inverted'}>ADD MILESTONE</BUTTON>
        {/* <MilestoneCard />
        <MilestoneCard />
        <MilestoneCard /> */}
      </motion.div>
    </div>
  )
}

export default SupervisorLoginMilestone
