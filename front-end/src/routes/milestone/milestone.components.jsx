import { motion } from 'framer-motion'

import UserNotLoginMilestone from './user-not-login.component'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

import EarthCanvas from '../../components/canvas/earth-canvas/earth-canvas.components'

import './milestone.styles.scss'
import MilestoneCard from '../../components/milestone-card/mile-stone-card.component'

const StudentLoginMilestone = () => {
  // const { cartItems, cartTotal } = useContext(CartContext)
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Title</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>

        <div className='header-block'>
          <span>Status</span>
        </div>
      </div>
      <MilestoneCard />
      {/* {cartItems.map(cartItem => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      })} */}
    </div>
  )
}

const Milestone = () => {
  return (
    <>
      <StudentLoginMilestone />
    </>
  )
}

export default Milestone
