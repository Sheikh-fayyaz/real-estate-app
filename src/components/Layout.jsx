// src/components/Layout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  return (
    <>
      <Header />
      <div className="content">
        {/* This is where the child routes will be rendered */}
        <Outlet />
      </div>
      {/* You can add a Footer here if you want */}
    </>
  )
}

export default Layout
