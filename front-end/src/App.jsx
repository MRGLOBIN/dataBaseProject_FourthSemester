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
import { div } from 'three/examples/jsm/nodes/Nodes.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 100,
    }
  }
  render() {
    return (
      <div className='w-screen h-screen '>
        <h1 className='text-white hover:bg-green-600'>hello</h1>
        <div className='bg-black'>
          <StarsCanvas />
        </div>
      </div>
    )
  }
}

export default App
