import { Route, Routes } from 'react-router-dom'

import logo from './logo.svg'
import Home from './routes/home/home.components'
import Auth from './routes/auth/auth.components'
import Navigation from './routes/navigation/navigation.components'

import './App.scss'
import React from 'react'

import EarthCanvas from './components/canvas/earth-canvas/earth-canvas.components'
import StarsCanvas from './components/canvas/start-canvas/star-canvas.components'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        {/* <header className='App-header'></header> */}
        <div className='relative z-0 bg-black w-screen h-screen'>
        <Navigation />
        <EarthCanvas />
          <StarsCanvas />
        </div>
      </div>
    )
  }
}

export default App
