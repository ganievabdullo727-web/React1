import { createContext, useContext, useState, useEffect } from "react";

const texts = {
  ru: {
    home: "Главная",
    shop: "Магазин",
    care: "Уход",
    blogs: "Блог",
    users: "Пользователи",
    login: "Войти",
    cart: "Корзина",
    total: "Итого",
    welcome: "ДОБРО ПОЖАЛОВАТЬ В GREENSHOP",
    heroStart: "СДЕЛАЕМ ЛУЧШЕ НАШУ",
    heroEnd: "ПЛАНЕТУ",
    heroDesc:
      "Мы онлайн-магазин растений: большой выбор недорогих и модных растений.",
    shopNow: "КУПИТЬ",
    categories: "Категории",
    priceRange: "Цена",
    price: "Цена:",
    allPlants: "Все растения",
    newArrivals: "Новинки",
    sale: "Скидки",
    notFound: "Ничего не найдено",
    gardenCare: "Уход за садом",
    plantRenovation: "Обновление растений",
    wateringGarden: "Полив сада",
    footerDesc:
      "Мы онлайн-магазин растений: большой выбор недорогих и модных растений.",
    newsletter: "Хотите подписаться на рассылку?",
    emailPlaceholder: "введите ваш email...",
    join: "Подписаться",
    newsletterText:
      "Мы публикуем акции и новинки в рассылке. Растения с доставкой прямо к вам домой!",
    myAccount: "Мой аккаунт",
    help: "Помощь",
    footerCategories: "Категории",
    rights: "© 2021 GreenShop. Все права защищены.",
    shortDesc: "Краткое описание:",
    size: "Размер:",
    buyNow: "КУПИТЬ СЕЙЧАС",
    addToCart: "В КОРЗИНУ",
    categoryLabel: "Категория:",
    tagsLabel: "Теги:",
    share: "Поделиться:",
    productDescription: "Описание товара",
    reviews: "Отзывы (19)",
    related: "Похожие товары",
    shortText:
      "Керамические кашпо идут с деревянной подставкой, которая поднимает растения над полом.",
    descText:
      "Керамические кашпо идут с деревянной подставкой, которая поднимает растения над полом.",
    livingRoom: "Гостиная:",
    diningRoom: "Столовая:",
    office: "Офис:",
    roomText: "Керамические кашпо идут с деревянной подставкой.",
  },

  en: {
    home: "Home",
    shop: "Shop",
    care: "Plant Care",
    blogs: "Blogs",
    users: "Users",
    login: "Login",
    cart: "Cart",
    total: "Total",
    welcome: "WELCOME TO GREENSHOP",
    heroStart: "LET'S MAKE A BETTER",
    heroEnd: "PLANET",
    heroDesc:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    shopNow: "SHOP NOW",
    categories: "Categories",
    priceRange: "Price Range",
    price: "Price:",
    allPlants: "All Plants",
    newArrivals: "New Arrivals",
    sale: "Sale",
    notFound: "Nothing found",
    gardenCare: "Garden Care",
    plantRenovation: "Plant Renovation",
    wateringGarden: "Watering Garden",
    footerDesc:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
    newsletter: "Would you like to join newsletters?",
    emailPlaceholder: "enter your email address...",
    join: "Join",
    newsletterText:
      "We usually post offers and challenges in newsletter. Houseplants shipped directly from our (green)house to yours!",
    myAccount: "My Account",
    help: "Help & Guide",
    footerCategories: "Categories",
    rights: "© 2021 GreenShop. All Rights Reserved.",
    shortDesc: "Short Description:",
    size: "Size:",
    buyNow: "BUY NOW",
    addToCart: "ADD TO CART",
    categoryLabel: "Categories:",
    tagsLabel: "Tags:",
    share: "Share this product:",
    productDescription: "Product Description",
    reviews: "Reviews (19)",
    related: "Related Products",
    shortText:
      "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
    descText:
      "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
    livingRoom: "Living Room:",
    diningRoom: "Dining Room:",
    office: "Office:",
    roomText: "The ceramic cylinder planters come with a wooden stand.",
  },

  tj: {
    home: "Асосӣ",
    shop: "Мағоза",
    care: "Нигоҳубин",
    blogs: "Блог",
    users: "Корбарон",
    login: "Ворид шудан",
    cart: "Сабад",
    total: "Ҷамъ",
    welcome: "ХУШ ОМАДЕД БА GREENSHOP",
    heroStart: "БИЁЕД БЕҲТАР КУНЕМ",
    heroEnd: "САЙЁРАРО",
    heroDesc:
      "Мо мағозаи онлайнии растаниҳо ҳастем: растаниҳои арзон ва замонавии гуногун.",
    shopNow: "ХАРИДАН",
    categories: "Категорияҳо",
    priceRange: "Доираи нарх",
    price: "Нарх:",
    allPlants: "Ҳамаи растаниҳо",
    newArrivals: "Навигариҳо",
    sale: "Тахфиф",
    notFound: "Ҳеҷ чиз ёфт нашуд",
    gardenCare: "Нигоҳубини боғ",
    plantRenovation: "Навсозии растаниҳо",
    wateringGarden: "Обёрии боғ",
    footerDesc:
      "Мо мағозаи онлайнии растаниҳо ҳастем: растаниҳои арзон ва замонавии гуногун.",
    newsletter: "Мехоҳед ба хабарнома обуна шавед?",
    emailPlaceholder: "email-и худро ворид кунед...",
    join: "Обуна",
    newsletterText:
      "Мо тахфифҳо ва навигариҳоро дар хабарнома нашр мекунем. Растаниҳо бевосита то хонаи шумо мерасанд!",
    myAccount: "Ҳисоби ман",
    help: "Кӯмак",
    footerCategories: "Категорияҳо",
    rights: "© 2021 GreenShop. Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
    shortDesc: "Тавсифи кӯтоҳ:",
    size: "Андоза:",
    buyNow: "ҲОЗИР ХАРИДАН",
    addToCart: "ЗАМ КАРДАН БА САБАД",
    categoryLabel: "Категория:",
    tagsLabel: "Тегҳо:",
    share: "Мубодила кардан:",
    productDescription: "Тавсифи маҳсулот",
    reviews: "Шарҳҳо (19)",
    related: "Маҳсулоти монанд",
    shortText:
      "Гулдонҳои сафолӣ бо пояи чӯбин меоянд, ки растаниро аз замин боло мебарад.",
    descText:
      "Гулдонҳои сафолӣ бо пояи чӯбин меоянд, ки растаниро аз замин боло мебарад.",
    livingRoom: "Меҳмонхона:",
    diningRoom: "Ошхона:",
    office: "Идора:",
    roomText: "Гулдонҳои сафолӣ бо пояи чӯбин меоянд.",
  },
};

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export function SettingsProvider({ children }) {
  const saved = localStorage.getItem("lang");
  const [lang, setLang] = useState(texts[saved] ? saved : "ru");
  const [dark, setDark] = useState(localStorage.getItem("dark") === "true");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("dark", dark);
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const t = (key) => texts[lang]?.[key] || texts.en[key] || key;

  return (
    <SettingsContext.Provider value={{ lang, setLang, dark, setDark, t }}>
      {children}
    </SettingsContext.Provider>
  );
}
