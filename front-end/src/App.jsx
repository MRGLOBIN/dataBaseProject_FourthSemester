import { Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from './logo.svg'
import Home from './routes/home/home.components'
import Auth from './routes/auth/auth.components'
import Navigation from './routes/navigation/navigation.components'

import './App.scss'
import React from 'react'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from './utils/framer-motion/motion'

import EarthCanvas from './components/canvas/earth-canvas/earth-canvas.components'
import StarsCanvas from './components/canvas/start-canvas/star-canvas.components'
const variants = {
  hidden: { x: '100%' },
  visible: { x: 0 },
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'></header>
        <div className='relative z-0 bg-black w-screen h-screen'>
          <Navigation />

          <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
          >
            <motion.div
              variants={zoomIn(0.2, 1)}
              className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
              initial='hidden'
              animate='show'
            >
              <h1 className='bg-white'>hello</h1>
            </motion.div>
          </div>
          {/* <EarthCanvas /> */}
          {/* <StarsCanvas /> */}
        </div>
      </div>
    )
  }
}

export default App
