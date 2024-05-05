
import { Link, Outlet } from 'react-router-dom'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
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
      </header>
      <Outlet />
    </>
  )
}

export default Navigation
