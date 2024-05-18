import { motion } from 'framer-motion'

import MilestoneCard from '../../components/milestone-card/mile-stone-card.component'

import { slideIn } from '../../utils/framer-motion/motion'
import { useContext } from 'react'
import { MilestoneContext } from '../../context/ milestone.context'

const StudentLoginMilestone = () => {
  const { milestones } = useContext(MilestoneContext)
  return (
    <div className='flex flex-col w-3/5 items-center min-h-[85vh] mx-auto'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        {milestones &&
          milestones.map(milestone => (
            <MilestoneCard key={milestone.id} milestone={milestone} />
          ))}
      </motion.div>
    </div>
  )
}

export default StudentLoginMilestone
