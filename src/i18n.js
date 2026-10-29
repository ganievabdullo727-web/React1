import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        about: "О нас",
        courses: "Курсы",
        events: "События",
        blog: "Блог",
        login: "Войти",
        users: "Пользователи",
        catalogs: "Каталоги",
        products: "Товары",
        search: "Поиск...",
        all: "Все",
        noData: "Нет данных",
        name: "Имя",
        email: "Почта",
        role: "Роль",
        city: "Город",
      },
    },
    en: {
      translation: {
        about: "About Us",
        courses: "Courses",
        events: "Events",
        blog: "Blog",
        login: "Login",
        users: "Users",
        catalogs: "Catalogs",
        products: "Products",
        search: "Search...",
        all: "All",
        noData: "No data",
        name: "Name",
        email: "Email",
        role: "Role",
        city: "City",
      },
    },
    tg: {
      translation: {
        about: "Дар бораи мо",
        courses: "Курсҳо",
        events: "Рӯйдодҳо",
        blog: "Блог",
        login: "Воридшавӣ",
        users: "Корбарон",
        catalogs: "Каталогҳо",
        products: "Маҳсулот",
        search: "Ҷустуҷӯ...",
        all: "Ҳама",
        noData: "Маълумот нест",
        name: "Ном",
        email: "Почта",
        role: "Нақш",
        city: "Шаҳр",
      },
    },
  },
  lng: localStorage.getItem("lang") || "ru",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;