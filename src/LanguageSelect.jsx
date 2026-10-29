import { useTranslation } from "react-i18next";

export default function LanguageSelect() {
  const { i18n } = useTranslation();

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };

  return (
    <div className="relative">
      <select
        value={i18n.language}
        onChange={changeLang}
        aria-label="Language"
        className="appearance-none cursor-pointer rounded-lg border border-[#7aa7e8]/10 bg-white/80 py-2 pl-4 pr-9 text-sm font-bold text-gray-800 shadow-sm outline-none transition hover:bg-white focus:border-[#e8a99f] focus:ring-2 focus:ring-[#FEDAD5] dark:border-white/20 dark:bg-[#092f64] dark:text-white dark:hover:bg-[#092f64] dark:focus:ring-[#093b81]"
      >
        <option
          value="ru"
          className="bg-white text-gray-800 dark:bg-[#2a1f1d] dark:text-white"
        >
          RU
        </option>
        <option
          value="en"
          className="bg-white text-gray-800 dark:bg-[#2a1f1d] dark:text-white"
        >
          EN
        </option>
        <option
          value="tg"
          className="bg-white text-gray-800 dark:bg-[#2a1f1d] dark:text-white"
        >
          TJ
        </option>
      </select>

      <svg
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600 dark:text-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
