import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Navbar'
import Navbar from './components/Header'
import Profile from './components/Profile'

function App() {
  return (
    <div className='App'>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Profile />
      </div>
    </div>
  )
}

export default App
