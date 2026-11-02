import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartProvider } from "../src/pages/CartContext";
import { SettingsProvider, useSettings } from "../src/pages/SettingsContext";

const langs = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "tj", label: "Тоҷикӣ" },
];

const Content = () => {
  const { lang, setLang, dark, setDark, t } = useSettings();
  const [menu, setMenu] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const current = langs.find((e) => e.code === lang);

  return (
    <div className="min-h-screen bg-white text-[#3D3D3D] transition-colors duration-300 dark:bg-[#1a1a1a] dark:text-white">
      <nav className="relative flex items-center justify-between border-t border-gray-200 px-[16px] py-[16px] transition-colors duration-300 dark:border-gray-700 lg:px-[64px]">
          <img src="/Logo (17).png" alt="logo" className="h-[32px]" />

        <div className="hidden gap-[48px] lg:flex">
          <Link to="/" className="font-bold">
            {t("home")}
          </Link>
          <Link to="/cart">{t("shop")}</Link>
          <Link to="#">Cart</Link>
          <Link to="#">{t("Blogs")}</Link>
          <Link to="/myaccount">{t("My Account")}</Link>
        </div>

        <div className="flex items-center gap-[12px] lg:gap-[20px]">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-[6px] rounded-[8px] border border-gray-300 px-[10px] py-[6px] text-[14px] transition hover:border-[#46A358] dark:border-gray-600"
            >
              <span className="uppercase">{current.code}</span>
              <span
                className={`text-[10px] transition-transform duration-300 ${
                  langOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`absolute right-0 top-full z-50 mt-[8px] w-[150px] origin-top-right overflow-hidden rounded-[8px] border border-gray-200 bg-white shadow-lg transition-all duration-200 dark:border-gray-600 dark:bg-[#2a2a2a] ${
                langOpen
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-95 opacity-0"
              }`}
            >
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setLangOpen(false);
                  }}
                  className={`flex w-full items-center px-[12px] py-[10px] text-left text-[14px] transition hover:bg-[#46A35820] ${
                    lang === l.code ? "font-bold text-[#46A358]" : ""
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className={`relative h-[28px] w-[56px] rounded-full transition-colors duration-300 ${
              dark ? "bg-[#46A358]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute left-[2px] top-[2px] h-[24px] w-[24px] rounded-full bg-white shadow transition-transform duration-300 ${
                dark ? "translate-x-[28px]" : "translate-x-0"
              }`}
            />
          </button>

          <Link to="/cart">
            <img
              src="/Group 1 (1).png"
              alt="cart"
              className="h-[24px] w-[24px]"
            />
          </Link>

          <Link
            to="/login"
            className="hidden rounded-[6px] bg-[#46A358] px-[20px] py-[8px] text-white sm:block"
          >
            {t("login")}
          </Link>

          <button
            onClick={() => setMenu(!menu)}
            className="text-[24px] lg:hidden"
          >
            {menu ? "✕" : "☰"}
          </button>
        </div>

        <div
          onClick={() => setMenu(false)}
          className={`absolute left-0 top-full z-40 flex w-full flex-col gap-[16px] border-t bg-white px-[16px] py-[16px] shadow transition-all duration-300 dark:border-gray-700 dark:bg-[#1a1a1a] lg:hidden ${
            menu ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Link to="/" className="font-bold">
            {t("home")}
          </Link>
          <Link to="/cart">{t("shop")}</Link>
          <Link to="#">{t("care")}</Link>
          <Link to="#">{t("blogs")}</Link>
          <Link to="/myaccount">{t("My Account")}</Link>
          <Link to="/login" className="text-[#46A358]">
            {t("login")}
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

const Layout = () => (
  <SettingsProvider>
    <CartProvider>
      <Content />
    </CartProvider>
  </SettingsProvider>
);

export default Layout;
