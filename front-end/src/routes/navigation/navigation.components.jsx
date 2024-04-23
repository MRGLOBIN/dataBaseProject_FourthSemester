import { Link, Outlet } from 'react-router-dom'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to='/'>Logo</Link>
        <div>
          <Link to='/'>H ome</Link>
          <Link to='/contact-us'>Contact Us</Link>
          <Link to='/auth'>Sign In</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation
