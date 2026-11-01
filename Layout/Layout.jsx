import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <nav className='flex justify-around items-center h-[100px]  p-[20px]'>
        <Link to="/">Биржа</Link>
        <Link to="/vorky">Ворки</Link>
        <Link to="/konkursi">Конкурсы</Link>
        {/* <Link to="/product/:id">ProductView</Link> */}
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout