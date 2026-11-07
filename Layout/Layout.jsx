import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="flex gap-[30px] w-[200px] m-auto mt-[20px]">
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="/">Home</Link>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="/about">About</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;