import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeButton from "../src/ThemeButton";
import LanguageSelect from "@/LanguageSelect";


const Layout = () => {
  const { t, i18n } = useTranslation();

  return (
    <div >
      <nav className="flex justify-around items-center h-[100px] bg-[#cfe3ff] dark:bg-[#0f2547] p-[30px] fixed top-0 left-0 w-full z-50">
     
        <LanguageSelect />   
        <Link
          className="font-bold hover:underline hover:text-[#2E7D32]"
          to="/login"
        >
          {t("login")}
        </Link>

        <ThemeButton />

       
      </nav>
      <div className="pt-[100px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
