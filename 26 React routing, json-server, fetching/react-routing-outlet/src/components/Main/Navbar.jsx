import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
        <li><Link to='/admin'>Admin Panel</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </ul>
  )
}

export default Navbar