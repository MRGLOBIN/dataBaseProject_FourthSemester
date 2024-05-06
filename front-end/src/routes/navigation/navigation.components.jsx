import { Link, Outlet } from 'react-router-dom'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
    <header> 
      <nav>
        <Link to='/'>Logo</Link>
      <ul class="nav_links">
        <li><a href='#'>Project</a></li>
        <li><a href='#'>Milestones</a></li>
        <li><a href='#'>Deadlines</a></li>
      <a href='#'><button1> About</button1></a>
        </ul>
      </nav>
>>>>>>> f869393f0b28bbc5889d6fc769699a21ca84a0f5
      </header>
    </>
  )
}

export default Navigation
