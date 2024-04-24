import { Route, Routes } from 'react-router-dom'

import logo from './logo.svg'
import Home from './routes/home/home.components'
import Auth from './routes/auth/auth.components'
import Navigation from './routes/navigation/navigation.components'

import './App.scss'
import React from 'react'
import EarthCanvas from './components/earth-canvas/earth-canvas.components'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        {/* <header className='App-header'></header> */}
        <EarthCanvas />
      </div>
    )
  }
}

export default App
