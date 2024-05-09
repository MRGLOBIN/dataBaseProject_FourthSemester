import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { UserContext } from '../../context/user.context'
import SVGComponent from '../../assets/logo'

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <>
      <div className='navigation text-white'>
        <Link className='logo-container' to='/'>
          <SVGComponent className='w-32 h-16 p-4' />
        </Link>
        <div className='nav-links-container p-6'>
          <Link className='nav-link' to='project'>
            Project
          </Link>
          <Link className='nav-link' to='milestone'>
            Milestones
          </Link>
          {currentUser ? (
            <span className='nav-link'>Sign Out</span>
          ) : (
            <Link className='nav-link' to='auth'>
              Sign In
            </Link>
          )}
          {/* {<CartIcon />} */}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
