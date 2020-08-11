import React from 'react'
import c from './Navbar.module.css'

const Navbar = () => (
  <nav className={c.nav}>
    <div className={`${c.item} ${c.active}`}>
      <a href='/profile'>Profile</a>
    </div>
    <div className={c.item}>
      <a href='/dialogs'>Messages</a>
    </div>
    <div className={c.item}>
      <a href='#'>list 3</a>
    </div>
    <div className={c.item}>
      <a href='#'>list 4</a>
    </div>
    <div className={c.item}>
      <a href='#'>list 5</a>
    </div>
  </nav>
)

export default Navbar
