import { Link, Outlet } from 'react-router-dom'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <Link to='/'>Logo</Link>
          <ul className='nav_links'>
            <li>
              <a href='#'>Project</a>
            </li>
            <li>
              <a href='#'>Milestones</a>
            </li>
            <li>
              <a href='#'>Deadlines</a>
            </li>
            <a href='#'>
              <button> About</button>
            </a>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navigation
