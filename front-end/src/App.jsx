import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'

import Home from './routes/home/home.components'
import Auth from './routes/auth/auth.components'
import Project from './routes/project/project.componnet'
import Milestone from './routes/milestone/milestone.components'
import Navigation from './routes/navigation/navigation.components'
import Footer from './components/footer/footer.components'

import './App.scss'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from './utils/framer-motion/motion'

import StarsCanvas from './components/canvas/start-canvas/star-canvas.components'

const variants = {
  hidden: { x: '100%' },
  visible: { x: 0 },
}

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='project' element={<Project />} />
            <Route path='auth' element={<Auth />} />
            <Route path='milestone' element={<Milestone />} />
          </Route>
        </Routes>
        <StarsCanvas />
        <Footer />
      </>
    )
  }
}

export default App
