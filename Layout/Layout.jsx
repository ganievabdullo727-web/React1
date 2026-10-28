import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="flex justify-around items-center h-[100px] bg-[#FEDAD5] p-[30px] fixed top-0 left-0 w-full z-50">
        <img src="/logo.png" alt="" />
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="/">About Us</Link>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="/courses">Courses</Link>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="#">Events</Link>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="#">Blog</Link>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="login">Login</Link>
        <img src="/cta.png" className="w-[22%]" alt="" />
      </nav>
      <div className="pt-[100px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;