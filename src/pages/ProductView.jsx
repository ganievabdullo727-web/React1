import { Link, useParams } from "react-router-dom";
import { products } from "../data";
import { useCart } from "./CartContext";
import { useSettings } from "./SettingsContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductView = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { t } = useSettings();

  const product = products.find((el) => el.id === Number(id));
  if (!product) return <p className="p-[24px]">{t("notFound")}</p>;

  const related = products.filter((el) => el.id !== product.id).slice(0, 5);

  return (
    <div className="max-w-[1200px] mx-auto px-[16px] py-[24px]">
      <div className="mt-[24px] flex flex-col gap-[24px] lg:flex-row">
        <div className="hidden gap-[8px] lg:flex lg:flex-col">
          {[1, 2, 3, 4].map((n) => (
            <img
              key={n}
              src={product.img}
              alt=""
              className="h-[70px] w-[70px] bg-[#FBFBFB] dark:bg-[#2a2a2a]"
            />
          ))}
        </div>

        <div className="flex items-center justify-center bg-[#FBFBFB] p-[24px] dark:bg-[#2a2a2a] lg:w-[400px]">
          <img src={product.img} alt={product.name} className="w-[80%]" />
        </div>

        <div className="lg:w-[500px]">
          <h1 className="text-[24px] font-bold">{product.name}</h1>
          <p className="mt-[8px] text-[20px] font-bold text-[#46A358]">
            ${product.price}
          </p>

          <p className="mt-[16px] text-[14px] font-bold">{t("shortDesc")}</p>
          <p className="mt-[8px] text-[13px] text-gray-500">{t("shortText")}</p>

          <p className="mt-[16px] text-[14px] font-bold">{t("size")}</p>
          <div className="mt-[8px] flex gap-[8px]">
            <button className="h-[28px] w-[28px] rounded-full border border-[#46A358] text-[#46A358]">
              S
            </button>
            <button className="h-[28px] w-[28px] rounded-full border">M</button>
            <button className="h-[28px] w-[28px] rounded-full border">L</button>
            <button className="h-[28px] w-[28px] rounded-full border">
              XL
            </button>
          </div>

          <div className="mt-[16px] flex items-center gap-[12px]">
            <button className="rounded-[6px] bg-[#46A358] px-[24px] py-[8px] text-[14px] font-bold text-white">
              {t("buyNow")}
            </button>
            <button
              onClick={() => addToCart(product)}
              className="rounded-[6px] border border-[#46A358] px-[24px] py-[8px] text-[14px] font-bold text-[#46A358]"
            >
              {t("addToCart")}
            </button>
          </div>

          <p className="mt-[16px] text-[13px] text-gray-500">
            SKU: 1995751877966
          </p>
          <p className="mt-[4px] text-[13px] text-gray-500">
            {t("categoryLabel")} Potter Plants
          </p>
          <p className="mt-[4px] text-[13px] text-gray-500">
            {t("tagsLabel")} Home, Garden, Plants
          </p>
          <p className="mt-[8px] text-[13px] font-bold">{t("share")}</p>
        </div>
      </div>

      <div className="mt-[40px] flex gap-[24px] text-[15px]">
        <p className="font-bold text-[#46A358]">{t("productDescription")}</p>
        <p>{t("reviews")}</p>
      </div>

      <div className="mt-[16px] text-[13px] text-gray-500">
        <p>{t("descText")}</p>
        <p className="mt-[16px] font-bold">{t("livingRoom")}</p>
        <p>{t("roomText")}</p>
        <p className="mt-[16px] font-bold">{t("diningRoom")}</p>
        <p>{t("roomText")}</p>
        <p className="mt-[16px] font-bold">{t("office")}</p>
        <p>{t("roomText")}</p>
      </div>

      <h2 className="mt-[64px] text-[16px] font-bold text-[#46A358]">
        {t("related")}
      </h2>

      <div className="mt-[24px] px-[40px]">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent>
            {related.map((el) => (
              <CarouselItem key={el.id} className="basis-1/2 lg:basis-1/4">
                <Link to={`/product/${el.id}`}>
                  <img
                    src={el.img}
                    alt=""
                    className="w-full bg-[#FBFBFB] dark:bg-[#2a2a2a]"
                  />
                  <p className="mt-[8px] text-[14px]">{el.name}</p>
                  <p className="font-bold text-[#46A358]">${el.price}</p>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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

export default ProductView;
