import React from 'react'
import c from './Navbar.module.css'

const Navbar = () => (
  <nav className={c.nav}>
    <div>
      <textarea name='' id='' cols='30' rows='10'></textarea>
      <button>Add Post</button>
      <button></button>
    </div>
    <div className={`${c.item} ${c.active}`}>
      <a href='#'>list 1</a>
    </div>
    <div className={c.item}>
      <a href='#'>list 2</a>
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
