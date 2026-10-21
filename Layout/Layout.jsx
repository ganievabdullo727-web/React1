import React from 'react'
import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/productsbyid'}>ProductsByid</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout