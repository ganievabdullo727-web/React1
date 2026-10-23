import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="flex justify-around items-center h-[100px] bg-[#F4F4F4] p-[20px] fixed top-0 left-0 w-full z-50">
        <div className="flex items-center gap-[10px]">
          <img className="w-[40px] h-[40px]" src="/public/Group 2.png" alt="" />
          <div className="text-left">
            <h2 className="text-[20px] font-bold">КД-ГРУПП</h2>
            <p className="text-[10px]">Транспортёры MEDO</p>
          </div>
        </div>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="/">ГЛАВНАЯ</Link>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="/onas">О НАС</Link>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="/novosti">НОВОСТИ</Link>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="/">ПАРТНЕРЫ</Link>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="/">КОНТАКТЫ</Link>
        <div className="text-left">
          <p className="text-[12px] text-[#777777]">Бесплатный звонок</p>
          <p className="text-[16px] font-bold">8 800 505 72 32</p>
        </div>
        <div className="flex gap-[10px]">
          <button className="text-[#2E7D32] bg-white rounded-full p-[10px]">Telegram</button>
          <button className="bg-[#2E7D32] text-white rounded-full p-[10px]">WhatsApp</button>
        </div>
      </nav>
      <div className="pt-[100px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;