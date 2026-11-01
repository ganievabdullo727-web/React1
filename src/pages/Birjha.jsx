import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products, blogPosts } from "../data";

const Birjha = () => {
  const [categories, setCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(200);

  async function getCategories() {
    let res = await fetch("https://test-swagger-2ph6.onrender.com/catalogs");
    let data = await res.json();
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  const filteredProducts = products.filter((el) => el.price <= selectedPrice);

  return (
    <div className="max-w-[1200px] mx-auto px-[16px] py-[16px] text-[#3D3D3D]">
      <div className="rounded-[16px] lg:rounded-none bg-[#F5F5F580] p-[20px] lg:px-[48px] lg:py-[40px]">
        <div className="flex items-center justify-between">
          <div className="max-w-[55%] lg:max-w-[400px]">
            <p className="text-[11px] lg:text-[14px]">WELCOME TO GREENSHOP</p>
            <h1 className="mt-[8px] text-[24px] lg:text-[48px] font-black">
              LET'S MAKE A BETTER <span className="text-[#46A358]">PLANET</span>
            </h1>
            <p className="mt-[12px] text-[12px] lg:text-[14px] text-gray-500">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
            <button className="mt-[16px] text-[14px] text-[#46A358] lg:bg-[#46A358] lg:text-white lg:px-[24px] lg:py-[8px] lg:rounded-[6px]">
              SHOP NOW
            </button>
          </div>
          <img
            src="/public/01 1.png"
            alt="Plant"
            className="h-[144px] lg:h-[400px] object-contain"
          />
        </div>
      </div>

      <div className="flex gap-[32px] mt-[24px] lg:mt-[40px]">
        <div className="hidden lg:block w-[250px] shrink-0">
          <div className="bg-[#FBFBFB] p-[16px] rounded-[8px]">
            <h2 className="font-bold">Categories</h2>
            <div className="mt-[12px] flex flex-col gap-[12px] text-[14px]">
              {categories.map((el) => (
                <p key={el.id}>{el.name}</p>
              ))}
            </div>

            <h2 className="mt-[32px] font-bold">Price Range</h2>
            <input
              type="range"
              min={0}
              max={200}
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(Number(e.target.value))}
              className="accent-[#46A358] w-[200px]"
            />
            <p className="mt-[12px] text-[14px]">
              Price: 
              <span className="font-bold text-[#46A358]">
                $0 - ${selectedPrice}
              </span>
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex gap-[24px] text-[14px] lg:text-[16px]">
            <button className="border-b-[2px] border-[#46A358] pb-[4px] font-bold text-[#46A358]">
              All Plants
            </button>
            <button>New Arrivals</button>
            <button>Sale</button>
          </div>

          <div className="mt-[24px] grid grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[32px]">
            {filteredProducts.map((el) => (
              <Link key={el.id} to={`/product/${el.id}`}>
                <div className="flex aspect-square items-center justify-center rounded-[8px] bg-[#F5F5F5]">
                  <img
                    src={el.img}
                    alt={el.name}
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
                <h3 className="mt-[12px] text-[14px] lg:text-[16px]">
                  {el.name}
                </h3>
                <p className="font-bold text-[#46A358]">${el.price}</p>
              </Link>
            ))}
            {filteredProducts.length === 0 && <p>Ничего не найдено</p>}
          </div>
        </div>
      </div>


      <footer className="mt-[64px] bg-[#FBFBFB] text-[#3D3D3D]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-[24px] px-[20px] py-[24px] lg:flex-row">
            <div className="lg:w-[25%] lg:pr-[24px]">
              <img src="/public/Group 22 (1).png" alt="" className="w-[100px] h-[100px]" />
              <h3 className="mt-[16px] font-bold">Garden Care</h3>
              <p className="mt-[8px] text-[14px] text-gray-500">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>

            <div className="lg:w-[25%] lg:pr-[24px]">
              <img src="/public/Group 21.png" alt="" className="w-[100px] h-[100px]" />
              <h3 className="mt-[16px] font-bold">Plant Renovation</h3>
              <p className="mt-[8px] text-[14px] text-gray-500">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>

            <div className="lg:w-[25%] lg:pr-[24px]">
              <img src="/public/Group 20 (2).png" alt="" className="w-[100px] h-[100px]" />
              <h3 className="mt-[16px] font-bold">Watering Graden</h3>
              <p className="mt-[8px] text-[14px] text-gray-500">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>

            <div className="lg:w-[25%]">
              <h3 className="text-[18px] font-bold">
                Would you like to join newsletters?
              </h3>
              <div className="mt-[16px] flex rounded-[6px]">
                <input
                  className="w-[70%] bg-white border border-[#80808041] px-[12px] py-[10px] text-[14px]"
                  placeholder="enter your email address..."
                />
                <button className="w-[30%] bg-[#46A358] font-bold text-white">
                  Join
                </button>
              </div>
              <p className="mt-[16px] text-[13px] text-gray-500">
                We usually post offers and challenges in newsletter. We're your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[16px] bg-[#46A3581A] px-[20px] py-[16px] lg:flex-row lg:items-center">
            <div className="lg:w-[25%]">
              <img src="/public/Logo (17).png" alt="" className="h-[32px]" />
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
              <h3 className="mb-[4px] text-[18px] font-bold">My Account</h3>
              <p>My Account</p>
              <p>Our stores</p>
              <p>Contact us</p>
              <p>Career</p>
              <p>Specials</p>
            </div>

            <div className="flex flex-col gap-[10px] text-[14px] lg:w-[25%]">
              <h3 className="mb-[4px] text-[18px] font-bold">Help & Guide</h3>
              <p>Help Center</p>
              <p>How to Buy</p>
              <p>Shipping & Delivery</p>
              <p>Product Policy</p>
              <p>How to Return</p>
            </div>

            <div className="flex flex-col gap-[10px] text-[14px] lg:w-[25%]">
              <h3 className="mb-[4px] text-[18px] font-bold">Categories</h3>
              <p>House Plants</p>
              <p>Potter Plants</p>
              <p>Seeds</p>
              <p>Small Plants</p>
              <p>Accessories</p>
            </div>

            <div className="lg:w-[25%]">


              <h3 className="mt-[32px] text-[18px] font-bold">We accept</h3>
              <div className="mt-[16px]">
                <img src="/public/image 16.png" alt="" className="h-[30px]" />
              </div>
            </div>
          </div>

          <p className="py-[12px] text-center text-[13px] text-gray-500">
            © 2021 GreenShop. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Birjha;