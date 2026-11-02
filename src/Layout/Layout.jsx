import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import logo from "./img/Logo (11).png";
import gr from "./img/Group 1 (2).png";
import logoutIcon from "./img/Logout.png";
import us from "./imgme/User.svg";

const Layout = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  function changeLanguage(e) {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  function logout() {
    // удаляем только токен, тему и язык остаются
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  }

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div
      style={{
        backgroundColor: dark ? "#111827" : "white",
        color: dark ? "white" : "black",
        minHeight: "100vh",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <nav className="hidden lg:flex lg:justify-center lg:items-center lg:fixed backdrop-blur-2xl lg:gap-[300px] z-10 lg:pt-[20px] lg:w-[100%]">
        <img src={logo} alt="GreenShop" />

        <div className="flex gap-[35px]">
          <Link className="text-[16px]" to="/">
            {t("Home")}
          </Link>
          <Link className="text-[16px]" to="/shop">
            {t("Shop")}
          </Link>
          <Link className="text-[16px]" to="/login">
            {t("Plant Care")}
          </Link>
          <Link className="text-[16px]" to="/wish">
            {t("Wishlist")}
          </Link>
        </div>

        <div className="flex justify-center items-center gap-[15px]">
          <Link to="/me">
            <img src={us} alt="" />
          </Link>
          <Link to="/cart">
            <img src={gr} alt="" />
          </Link>

          <button
            onClick={logout}
            className="flex items-center text-white w-[100px] h-[35px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]"
          >
            <img src={logoutIcon} alt="" />
            {t("Logout")}
          </button>

          <button
            onClick={() => setDark((prev) => !prev)}
            className="border rounded px-3 py-1"
          >
            {dark ? t("lightMode") : t("darkMode")}
          </button>

          <select
            value={i18n.language}
            onChange={changeLanguage}
            className="border rounded-md px-3 py-2"
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;