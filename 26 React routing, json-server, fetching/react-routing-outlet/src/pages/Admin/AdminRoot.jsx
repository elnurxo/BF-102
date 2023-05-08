import React from 'react'
import Navbar from '../../components/Admin/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Admin/Footer'

const AdminRoot = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AdminRoot