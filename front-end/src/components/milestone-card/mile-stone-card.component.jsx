import { useContext } from 'react'

// import { CartContext } from '../../contexts/cart.context'

import './milestone-card.styles.scss'

const MilestoneCard = ({ milestoneItem }) => {
  //   const { name, imageUrl, price, quantity } = cartItem
  //   const { clearItemFromCart, addItemToCart, removeItemFromCart } =
  //     useContext(CartContext)

  //   const deleteItemHandler = () => clearItemFromCart(cartItem)
  //   const addItemHandler = () => addItemToCart(cartItem)
  //   const removeItemHandler = () => removeItemFromCart(cartItem)

  return (
    <div className='checkout-item-container'>
      <span className='title'>Title</span>

      <div className='name'>doc 1 has to be completed toady herere and now</div>
      <div className='remove-button'>completed</div>
    </div>
  )
}

export default MilestoneCard
