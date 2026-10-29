import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeButton from "../src/ThemeButton";
import LanguageSelect from "@/LanguageSelect";


const Layout = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#121212] dark:text-white">
      <nav className="flex justify-around items-center h-[100px] bg-[#FEDAD5] dark:bg-[#2a1f1d] p-[30px] fixed top-0 left-0 w-full z-50">
        <img src="/logo.png" alt="" />
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="/">
          {t("about")}
        </Link>
        <Link
          className="font-bold hover:underline hover:text-[#2E7D32]"
          to="/courses"
        >
          {t("courses")}
        </Link>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="#">
          {t("events")}
        </Link>
        <Link className="font-bold hover:underline hover:text-[#2E7D32]" to="#">
          {t("blog")}
        </Link>
        <Link
          className="font-bold hover:underline hover:text-[#2E7D32]"
          to="/login"
        >
          {t("login")}
        </Link>

        <LanguageSelect />
        <ThemeButton />

        <img src="/cta.png" className="w-[22%]" alt="" />
      </nav>
      <div className="pt-[100px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
