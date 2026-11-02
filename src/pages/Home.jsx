x
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

import im from "../Layout/img/01 2 (1).png";
import im1 from "../Layout/img/01 1.png";
import ik from "../Layout/img/image 14.png";
import ik1 from "../Layout/img/image 15.png";
import tr from "../Layout/img/01 (1).png";
import tr1 from "../Layout/img/02.png";
import tr2 from "../Layout/img/03.png";
import tr3 from "../Layout/img/04 (1).png";

import ras from "../Layout/imgpol/01 3.png";
import ras2 from "../Layout/imgpol/image 1.png";
import ras3 from "../Layout/imgpol/image 10 (1).png";
import ras4 from "../Layout/imgpol/image 2 (1).png";
import ras5 from "../Layout/imgpol/image 7.png";
import ras6 from "../Layout/imgpol/image 8.png";
import ras7 from "../Layout/imgpol/product-21-320x320 1.png";
import serc from "../Layout/imgpol/Frame (24).png";
import hert from "../Layout/imgpol/heart 1.png";
import cart from "../Layout/imgpol/shopping 1.png";
import sale from "../Layout/imgpol/Super Sale Banner.png";
import group from "../Layout/imgpol/Group 23.png";
import logo from "../Layout/imgpol/Logo (12).png";
import loc from "../Layout/imgpol/Location.png";
import mes from "../Layout/imgpol/Message.png";
import cal from "../Layout/imgpol/Calling.png";

import face from "../Layout/socials/Facebook.png";
import inst from "../Layout/socials/Instagram.png";
import link from "../Layout/socials/Linkedin.png";
import twt from "../Layout/socials/Twitter.png";
import un from "../Layout/socials/Union.png";
import bank from "../Layout/socials/image 16.png";

const rasarr = [ras, ras2, ras3, ras4, ras5, ras6, ras7];
const blogImages = [tr, tr1, tr2, tr3];

const api = "https://test-swagger-2ph6.onrender.com/products?limit=9";
const catalogApi = "https://test-swagger-2ph6.onrender.com/catalogs";

// безопасное чтение списка из localStorage (не падает, если ключа нет)
function readList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function addwish(el) {
  const wsh = readList("wsh");
  if (!wsh.some((item) => item.id === el.id)) {
    wsh.push(el);
    localStorage.setItem("wsh", JSON.stringify(wsh));
  }
}

function addToCart(el) {
  const items = readList("cart");
  const found = items.find((item) => item.id === el.id);
  if (found) {
    found.cnt += 1;
  } else {
    items.push({ ...el, cnt: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(items));
}

const Home = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [price, setPrice] = useState([0, 15000]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [cid, setCid] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  // поиск отправляется через 400 мс после последней набранной буквы
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
      setPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  async function getData() {
    try {
      let url = api + "&page=" + page;
      if (cid > 0) url += "&catalogId=" + cid;
      if (search) url += "&search=" + encodeURIComponent(search);

      const token = localStorage.getItem("token");
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setData(data.data);
      setTotalPages(data.totalPages ?? 0);
    } catch (error) {
      console.error(error);
    }
  }

  async function getCatalog() {
    try {
      const { data } = await axios.get(catalogApi);
      setCatalog(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, [page, cid, search]);

  useEffect(() => {
    getCatalog();
  }, []);

  function chooseCatalog(id) {
    setCid(id);
    setPage(1);
  }
  return (
    <div className="pt-0 lg:pt-[70px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          {" "}
          <div className="flex bg-[#CBE5D0] rounded-[16px] p-3 m-3 lg:bg-[#F9F9F9] items-center justify-center gap-[15px] lg:gap-0">
            <div className="flex text-black  flex-col gap-[5px]">
              <p>{t("Welcome to GreenShop")}</p>
              <h1 className="text-[24px] w-[182px] lg:w-[530px] font-extrabold lg:text-[70px]">
                {t("Let’s Make a Better")} {" "}
                <span className="text-[#46A358]">{t("Planet")}</span>
              </h1>
              <p className="w-[207px] hidden lg:block lg:w-[587px] ">
                {t("We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!")}
              </p>
              <p className="w-[207px] block lg:hidden lg:w-[587px] ">
                {t("We are an online plant shop offering a wide range")} {" "}
              </p>
              <br />
              <button className="flex items-center text-white w-[140px] h-[40px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">
                {t("SHOP NOW")}
              </button>
            </div>
            <div className="flex justify-center gap-0 w-[80px]  lg:w-[658px] items-center">
              <img src={im} className="self-end " alt="" />
              <img src={im1} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="flex  bg-[#CBE5D0] rounded-[16px] p-3 m-3 lg:bg-[#F9F9F9] flex-row-reverse items-center justify-center gap-[15px] lg:gap-0">
            <div className="flex text-black flex-col gap-[5px]">
              <p>{t("Welcome to GreenShop")}</p>
              <h1 className="text-[24px] w-[182px] lg:w-[530px] font-extrabold lg:text-[70px]">
                {t("Let’s Make a Better")} {" "}
                <span className="text-[#46A358]">{t("Planet")}</span>
              </h1>
              <p className="w-[207px] hidden lg:block lg:w-[587px] ">
                {t("We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!")}
              </p>
              <p className="w-[207px] block lg:hidden lg:w-[587px] ">
                {t("We are an online plant shop offering a wide range")} {" "}
              </p>
              <br />
              <button className="flex items-center text-white w-[140px] h-[40px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">
                {t("SHOP NOW")}
              </button>
            </div>
            <div className="flex justify-center gap-0 w-[80px]  lg:w-[658px] items-center">
              <img src={im} className="self-end " alt="" />
              <img src={im1} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="flex bg-[#CBE5D0] rounded-[16px] p-3 m-3 lg:bg-[#F9F9F9] items-center justify-center gap-[15px] lg:gap-0">
            <div className="flex text-black  flex-col gap-[5px]">
              <p>{t("Welcome to GreenShop")}</p>
              <h1 className="text-[24px] w-[182px] lg:w-[530px] font-extrabold lg:text-[70px]">
                {t("Let’s Make a Better")} {" "}
                <span className="text-[#46A358]">{t("Planet")}</span>
              </h1>
              <p className="w-[207px] hidden lg:block lg:w-[587px] ">
                {t("We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!")}
              </p>
              <p className="w-[207px] block lg:hidden lg:w-[587px] ">
                {t("We are an online plant shop offering a wide range")} {" "}
              </p>
              <br />
              <button className="flex items-center text-white w-[140px] h-[40px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">
                {t("SHOP NOW")}
              </button>
            </div>
            <div className="flex justify-center gap-0 w-[80px]  lg:w-[658px] items-center">
              <img src={im} className="self-end " alt="" />
              <img src={im1} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center items-center gap-[95px]">
        <div className="hidden lg:block text-black  bg-[#FBFBFB] lg:flex lg:flex-col lg:gap-[40px] lg:w-[310px] p-5 ">
          <h1 className="font-bold text-[18px]">{t("Categories")}</h1>
          <div className="flex flex-col gap-[15px]">
            <p onClick={() => setCid(0)}>{t("Все")}</p>
            {catalog.map((el) => {
              return (
                <p key={el.id} onClick={() => setCid(el.id)}>
                  {el.name}
                </p>
              );
            })}
          </div>
          <div className="">
            <Slider
              value={price}
              onValueChange={setPrice}
              min={0}
              max={15000}
              className=" w-[200px] max-w-[200px] 
        [&_[data-slot=range]]:bg-[#46A358]
       [&_[data-slot=thumb]]:bg-green-400"
            />
            <p className="flex gap-[15px]">
              {t("Price:")}
              <p className="text-[#46A358]">
                ${price[0]}-${price[1]}
              </p>
            </p>
            <button className="flex items-center text-white mt-[50px] w-[100px] h-[40px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">
              {t("Filter")}
            </button>
          </div>
          <img src={sale} alt="" />
        </div>
        <div className="flex flex-col justify-center  gap-[25px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[3px] lg:gap-[15px]">
            <Input type="text" placeholder={t("search")} value={search} onInput={(e)=>setSearch(e.target.value)} />
            </div>
            <p className="hidden lg:block">{t("Short by:Default sorting")}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center  lg:gap-[25px] lg:w-[840px]">
            {data
              .filter((el) => {
                return el.price > price[0] && el.price < price[1];
              })
              .map((e, i) => {
                return (
                  <div key={e.id} className="w-[175px] lg:w-[260px] ">
                    <img
                      className="bg-[#FBFBFB]"
                      src={rasarr[i % rasarr.length]}
                      alt=""
                    />
                    <div className="flex justify-center items-center mr-[25px] gap-[15px]">
                      <img onClick={()=>addToCart(e)} src={cart} alt="" />

                      <img onClick={()=>addwish(e)} src={hert} alt="" />
                      <Link to={`shop/${e.id}`}>
                      <img src={serc} alt="" />

                      </Link>
                    </div>
                    <h1>{e.name}</h1>
                    <p className="text-[#46A358] font-bold text-[18px]">
                      ${e.price}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className="flex justify-center gap-[15px]">
            {Array.from({ length: dataProductsTotalPage }).map((e, i) => {
              const page = i + 1;
              return (
                <p
                  key={i}
                  onClick={() => setPage(page)}
                  className="border p-2 px-4 rounded-xl cursor-pointer hover:bg-[#46A358] hover:text-white"
                >
                  {page}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="hidden text-black  lg:block lg:flex lg:justify-center mt-[50px] gap-[52px]">
        <div className="lg:w-[586px] bg-[#FBFBFB] lg:p-2 flex justify-between items-center">
          <img src={ik} alt="" />
          <div className=" text-end flex flex-col gap-[15px] justify-end flex-end">
            <h1 className="font-semibold">
              {t("Summer cactus")} <br />{t("& succulents")}
            </h1>
            <p>
              {t("We are an online plant shop offering a wide range of cheap and trendy plants")}
            </p>
            <button className="flex items-center self-end text-white w-[140px] h-[40px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">
              {t("Find More")}
            </button>
          </div>
        </div>
        <div className="lg:w-[586px] text-black  bg-[#FBFBFB] lg:p-2 flex justify-between items-center">
          <img src={ik1} alt="" />
          <div className=" text-end flex flex-col gap-[15px] justify-end flex-end">
            <h1 className="font-semibold">
              {t("Styling Trends")} <br />{t("& much more")}
            </h1>
            <p>
              {t("We are an online plant shop offering a wide range of cheap and trendy plants")}
            </p>
            <button className="flex items-center self-end text-white w-[140px] h-[40px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">
              {t("Find More")}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:flex lg:flex-col lg:justify-center items-center mt-[50px] gap-[15px]">
        <h1 className="font-bold text-[24px]">{t("Our Blog Posts")}</h1>
        <p>{t("We are an online plant shop offering a wide range of cheap and trendy plants.")} </p>
        <div className="flex justify-center gap-[45px]">
          <div className="w-[268px] text-black  ">
            <img src={tr} alt="" />
            <div className="p-1 bg-[#FBFBFB]">
            <p className="text-[#46A358] font-bold">{t("September 12  I Read in 6 minutes")}</p>
            <h1 className="text-[20px] font-bold">{t("Cactus & Succulent")} <br />
{t("Care Tips")}</h1>
<p className="text-[#727272]">{t("Cacti are succulents are easy care plants for any home or patio.")} </p>
<p>{t("Read More")}</p>
</div>
          </div>
           <div className="w-[268px] text-black  ">
            <img src={tr1} alt="" />
            <div className="p-1 bg-[#FBFBFB]">
            <p className="text-[#46A358] font-bold">{t("September 12  I Read in 6 minutes")}</p>
            <h1 className="text-[20px] font-bold">{t("Cactus & Succulent")} <br />
{t("Care Tips")}</h1>
<p className="text-[#727272]">{t("Cacti are succulents are easy care plants for any home or patio.")} </p>
<p>{t("Read More")}</p>
</div>
          </div>
           <div className="w-[268px] text-black ">
            <img src={tr2} alt="" />
            <div className="p-1 bg-[#FBFBFB]">
            <p className="text-[#46A358] font-bold">{t("September 12  I Read in 6 minutes")}</p>
            <h1 className="text-[20px] font-bold">{t("Cactus & Succulent")} <br />
{t("Care Tips")}</h1>
<p className="text-[#727272]">{t("Cacti are succulents are easy care plants for any home or patio.")} </p>
<p>{t("Read More")}</p>
</div>
          </div>
           <div className="w-[268px] text-black  ">
            <img src={tr3} alt="" />
            <div className="p-1 bg-[#FBFBFB]">
            <p className="text-[#46A358] font-bold">{t("September 12  I Read in 6 minutes")}</p>
            <h1 className="text-[20px] font-bold">{t("Cactus & Succulent")} <br />
{t("Care Tips")}</h1>
<p className="text-[#727272]">{t("Cacti are succulents are easy care plants for any home or patio.")} </p>
<p>{t("Read More")}</p>
</div>
          </div>
        </div>
      </div>
      <div className="hidden text-black  lg:block mt-[50px]">
        <div className="flex justify-center bg-[#FBFBFB]">
          <img src={group} alt="" />
        </div>
        <div className="flex justify-center items-center mt-[50px] bg-[#EDF6EF] h-[88px]  gap-[145px]">
 <img src={logo} alt="" />
 <div className="flex items-center gap-[15px]">
  <img src={loc} alt="" />
  <p>70 West Buckingham Ave. <br />
Farmingdale, NY 11735</p>
 </div>
  <div className="flex items-center gap-[15px]">
  <img src={mes} alt="" />
  <p>contact@greenshop.com</p>
 </div>
   <div className="flex items-center gap-[15px]">
  <img src={cal} alt="" />
  <p>+88 01911 717 490</p>
 </div>
        </div>
        <div className="flex justify-center mt-4 bg-[#FBFBFB]  gap-[205px]">
          <div className="">
            <h1 className="text-[18px] font-bold">{t("My account")}</h1>
            <p className="flex flex-col gap-[5px]">{t("My Account")} <br />
{t("Our stores")} <br />
{t("Contact us")}  <br />
{t("Career")} <br />
{t("Specials")}</p>
          </div>
             <div className="">
            <h1 className="text-[18px] font-bold">{t("Help & Guide")}</h1>
            <p className="flex flex-col gap-[5px]">{t("Help Center")} <br />
{t("How to Buy")} <br />
{t("Shipping & Delivery")} <br />
{t("Product Policy")} <br />
{t("How to Return")}</p>
          </div>
             <div className="">
            <h1 className="text-[18px] font-bold">{t("Categories")}</h1> 
            <p className="flex flex-col gap-[5px]">{t("House Plants")} <br />
{t("Potter Plants")} <br />
{t("Seeds")} <br />
{t("Small Plants")} <br />
{t("Accessories")}</p>
          </div>
          <div className="flex flex-col gap-[7px] items-start">
            <h1 className="text-[18px] font-bold">{t("Social Media")}</h1> 
            <div className="flex items-center gap-[25px]">
              <img src={face} alt="" />
              <img src={inst} alt="" />
              <img src={link} alt="" />
              <img src={un} alt="" />
              <img src={twt} alt="" />
            </div>
            <h1 className="text-[18px] font-bold">{t("We accept")}</h1> 
            <img src={bank} alt="" />
            
          </div>
        </div>
        <hr className="mt-5" />
        <p className="flex justify-center mt-5">{t("© 2021 GreenShop. All Rights Reserved.")}</p>
      </div>
    </div>
  );
};

export default Home;