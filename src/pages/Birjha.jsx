import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data";
import { useCart } from "./CartContext";
import { useSettings } from "./SettingsContext";

const Birjha = () => {
  const [categories, setCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(200);
  const { addToCart } = useCart();
  const { t } = useSettings();

  async function getCategories() {
    try {
      const res = await fetch(
        "https://test-swagger-2ph6.onrender.com/catalogs",
      );
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const filteredProducts = products.filter((el) => el.price <= selectedPrice);

  return (
    <div className="max-w-[1200px] mx-auto px-[16px] py-[16px]">
      <div className="rounded-[16px] bg-[#F5F5F580] p-[20px] dark:bg-[#2a2a2a] lg:rounded-none lg:px-[48px] lg:py-[40px]">
        <div className="flex items-center justify-between">
          <div className="max-w-[55%] lg:max-w-[400px]">
            <p className="text-[11px] lg:text-[14px]">{t("welcome")}</p>
            <h1 className="mt-[8px] text-[24px] font-black lg:text-[48px]">
              {t("heroStart")}{" "}
              <span className="text-[#46A358]">{t("heroEnd")}</span>
            </h1>
            <p className="mt-[12px] text-[12px] text-gray-500 lg:text-[14px]">
              {t("heroDesc")}
            </p>
            <button className="mt-[16px] text-[14px] text-[#46A358] lg:rounded-[6px] lg:bg-[#46A358] lg:px-[24px] lg:py-[8px] lg:text-white">
              {t("shopNow")}
            </button>
          </div>
          <img
            src="/01 1.png"
            alt="Plant"
            className="h-[144px] object-contain lg:h-[400px]"
          />
        </div>
      </div>

      <div className="mt-[24px] flex gap-[32px] lg:mt-[40px]">
        <div className="hidden w-[250px] shrink-0 lg:block">
          <div className="rounded-[8px] bg-[#FBFBFB] p-[16px] dark:bg-[#2a2a2a]">
            <h2 className="font-bold">{t("categories")}</h2>
            <div className="mt-[12px] flex flex-col gap-[12px] text-[14px]">
              {categories.map((el) => (
                <p key={el.id}>{el.name}</p>
              ))}
            </div>

            <h2 className="mt-[32px] font-bold">{t("priceRange")}</h2>
            <input
              type="range"
              min={0}
              max={200}
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(Number(e.target.value))}
              className="w-[200px] accent-[#46A358]"
            />
            <p className="mt-[12px] text-[14px]">
              {t("price")}{" "}
              <span className="font-bold text-[#46A358]">
                $0 - ${selectedPrice}
              </span>
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex gap-[24px] text-[14px] lg:text-[16px]">
            <button className="border-b-[2px] border-[#46A358] pb-[4px] font-bold text-[#46A358]">
              {t("allPlants")}
            </button>
            <button>{t("newArrivals")}</button>
            <button>{t("sale")}</button>
          </div>

          <div className="mt-[24px] grid grid-cols-2 gap-[16px] lg:grid-cols-3 lg:gap-[32px]">
            {filteredProducts.map((el) => (
              <Link
                key={el.id}
                to={`/product/${el.id}`}
                className="group block"
              >
                <div className="relative flex aspect-square items-center justify-center rounded-[8px] bg-[#F5F5F5] dark:bg-[#333]">
                  <img
                    src={el.img}
                    alt={el.name}
                    className="h-[80%] w-[80%] object-contain"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(el);
                    }}
                    className="absolute bottom-[8px] left-1/2 flex h-[40px] w-[40px] -translate-x-1/2 items-center justify-center rounded-[8px] bg-white transition lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    <img
                      src="/Vector (26).png"
                      alt="cart"
                      className="h-[22px] w-[22px]"
                    />
                  </button>
                </div>
                <h3 className="mt-[12px] text-[14px] lg:text-[16px]">
                  {el.name}
                </h3>
                <p className="font-bold text-[#46A358]">${el.price}</p>
              </Link>
            ))}
            {filteredProducts.length === 0 && <p>{t("notFound")}</p>}
          </div>
        </div>
      </div>

      <footer className="mt-[64px] bg-[#FBFBFB] dark:bg-[#2a2a2a]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-[24px] px-[20px] py-[24px] lg:flex-row">
            <div className="lg:w-[25%] lg:pr-[24px]">
              <img
                src="/Group 22 (1).png"
                alt=""
                className="h-[100px] w-[100px]"
              />
              <h3 className="mt-[16px] font-bold">{t("gardenCare")}</h3>
              <p className="mt-[8px] text-[14px] text-gray-500">
                {t("footerDesc")}
              </p>
            </div>

            <div className="lg:w-[25%] lg:pr-[24px]">
              <img src="/Group 21.png" alt="" className="h-[100px] w-[100px]" />
              <h3 className="mt-[16px] font-bold">{t("plantRenovation")}</h3>
              <p className="mt-[8px] text-[14px] text-gray-500">
                {t("footerDesc")}
              </p>
            </div>

            <div className="lg:w-[25%] lg:pr-[24px]">
              <img
                src="/Group 20 (2).png"
                alt=""
                className="h-[100px] w-[100px]"
              />
              <h3 className="mt-[16px] font-bold">{t("wateringGarden")}</h3>
              <p className="mt-[8px] text-[14px] text-gray-500">
                {t("footerDesc")}
              </p>
            </div>

            <div className="lg:w-[25%]">
              <h3 className="text-[18px] font-bold">{t("newsletter")}</h3>
              <div className="mt-[16px] flex rounded-[6px]">
                <input
                  className="w-[70%] border border-[#80808041] bg-white px-[12px] py-[10px] text-[14px] text-black"
                  placeholder={t("emailPlaceholder")}
                />
                <button className="w-[30%] bg-[#46A358] font-bold text-white">
                  {t("join")}
                </button>
              </div>
              <p className="mt-[16px] text-[13px] text-gray-500">
                {t("newsletterText")}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[16px] bg-[#46A3581A] px-[20px] py-[16px] lg:flex-row lg:items-center">
            <div className="lg:w-[25%]">
              <img src="/Logo (17).png" alt="" className="h-[32px]" />
            </div>
            <div className="flex items-center gap-[12px] text-[14px] lg:w-[25%]">
              <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
            </div>
            <div className="flex items-center gap-[12px] text-[14px] lg:w-[25%]">
              <p>contact@greenshop.com</p>
            </div>
            <div className="flex items-center gap-[12px] text-[14px] lg:w-[25%]">
              <p>+88 01911 717 490</p>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] px-[20px] py-[24px] lg:flex-row">
            <div className="flex flex-col gap-[10px] text-[14px] lg:w-[25%]">
              <h3 className="mb-[4px] text-[18px] font-bold">
                {t("myAccount")}
              </h3>
              <p>My Account</p>
              <p>Our stores</p>
              <p>Contact us</p>
              <p>Career</p>
              <p>Specials</p>
            </div>

            <div className="flex flex-col gap-[10px] text-[14px] lg:w-[25%]">
              <h3 className="mb-[4px] text-[18px] font-bold">{t("help")}</h3>
              <p>Help Center</p>
              <p>How to Buy</p>
              <p>Shipping & Delivery</p>
              <p>Product Policy</p>
              <p>How to Return</p>
            </div>

            <div className="flex flex-col gap-[10px] text-[14px] lg:w-[25%]">
              <h3 className="mb-[4px] text-[18px] font-bold">
                {t("footerCategories")}
              </h3>
              <p>House Plants</p>
              <p>Potter Plants</p>
              <p>Seeds</p>
              <p>Small Plants</p>
              <p>Accessories</p>
            </div>

            <div className="lg:w-[25%]">
              <h3 className="mt-[32px] text-[18px] font-bold">We accept</h3>
              <div className="mt-[16px]">
                <img src="/image 16.png" alt="" className="h-[30px]" />
              </div>
            </div>
          </div>

          <p className="py-[12px] text-center text-[13px] text-gray-500">
            {t("rights")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Birjha;
