import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
        <li><Link to='/'>Main Site</Link></li>
        <li><Link to='/admin'>Dashboard</Link></li>
        <li><Link to='/admin/products'>Products</Link></li>
        <li><Link to='/admin/add-product'>Add New Product</Link></li>
    </ul>
  )
}

export default Navbar