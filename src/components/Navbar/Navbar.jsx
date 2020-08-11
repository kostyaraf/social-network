import React from 'react'
import c from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
console.log(c)
const Navbar = () => (
  <nav className={c.nav}>
    <div className={c.item}>
    {/* <div className={`${c.item} ${c.active}`}> */}
      <NavLink activeClassName={c.activeLink} to='/profile'>Profile</NavLink>
    </div>
    <div className={c.item}>
      <NavLink activeClassName={c.activeLink} to='/dialogs'>Messages</NavLink>
    </div>
    <div className={c.item}>
      <NavLink activeClassName={c.activeLink} to='/music'>Music</NavLink>
    </div>
    <div className={c.item}>
      <NavLink activeClassName={c.activeLink} to='/news'>News</NavLink>
    </div>
    <div className={c.item}>
      <NavLink activeClassName={c.activeLink} to='/settings'>Settings</NavLink>
    </div>
  </nav>
)

export default Navbar
