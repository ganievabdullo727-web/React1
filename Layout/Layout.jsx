import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <nav className='flex justify-around items-center h-[100px]  bg-[#F7F6FF] p-[20px] fixed top-0 left-0 w-full z-50'>
        <img src="/public/worktap 1.png" alt="" />
        <Link className='font-bold  hover:underline hover:text-[#1DBF73] ' to="/">Биржа</Link>
        <Link className='font-bold  hover:underline hover:text-[#1DBF73] ' to="/vorky">Ворки</Link>
        <Link className='font-bold  hover:underline hover:text-[#1DBF73] ' to="/konkursi">Конкурсы</Link>
        {/* <Link className='font-bold  hover:underline hover:text-[#1DBF73] ' to="/sozdatwork">Создать ворк</Link> */}
        <Link className='font-bold  hover:underline hover:text-[#1DBF73] ' to="/sozdatzakaz">Создать заказ</Link>
        <div className='flex gap-[10px]'>
          <button className='text-[#1DBF73] bg-[#F2F0FE] rounded-full p-[10px]'>Регистрация</button>
          <button className='bg-[#1DBF73] text-[#F2F0FE] rounded-full p-[10px]'>Войти</button>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout