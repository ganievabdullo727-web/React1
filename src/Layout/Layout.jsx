
import React from 'react'
import {Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
        <nav className='flex gap-10 p-5  border-b-1 items-center justify-around max-w-[1200px] mx-auto '>
            <img src="/public/Logo (15).png" alt="" />
           <div className='flex gap-[30px]'>
             <Link to={'/'}>Home</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/careers'}>Careers</Link>
            <Link to={'/careerDetails'}>Career Details</Link>
            <Link to={'/Contact'}>Contact</Link>
           </div>
            <button className='bg-[#0A84FF] rounded-xl px-[10px] h-[40px]'>Contact Us</button>
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout