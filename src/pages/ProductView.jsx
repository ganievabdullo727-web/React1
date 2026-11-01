import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductView = () => {
  const { id } = useParams();
  const product = products.find((el) => el.id === Number(id));
  const [count, setCount] = useState(1);

  return (
    <div className="max-w-[1200px] mx-auto px-[16px] py-[24px] text-[#3D3D3D]">
      <div className="mt-[24px] flex flex-col gap-[24px] lg:flex-row">
        <div className="flex gap-[8px] lg:flex-col">
          <img
            src={product.img}
            alt=""
            className="w-[70px] h-[70px] bg-[#FBFBFB]"
          />
          <img
            src={product.img}
            alt=""
            className="w-[70px] h-[70px] bg-[#FBFBFB]"
          />
          <img
            src={product.img}
            alt=""
            className="w-[70px] h-[70px] bg-[#FBFBFB]"
          />
          <img
            src={product.img}
            alt=""
            className="w-[70px] h-[70px] bg-[#FBFBFB]"
          />
        </div>

        <div className="flex items-center justify-center bg-[#FBFBFB] p-[24px] lg:w-[400px]">
          <img src={product.img} alt={product.name} className="w-[80%]" />
        </div>

        <div className="lg:w-[500px]">
          <h1 className="text-[24px] font-bold">{product.name}</h1>
          <p className="mt-[8px] text-[20px] font-bold text-[#46A358]">
            ${product.price}
          </p>

          <p className="mt-[16px] text-[14px] font-bold">Short Description:</p>
          <p className="mt-[8px] text-[13px] text-gray-500">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground.
          </p>

          <p className="mt-[16px] text-[14px] font-bold">Size:</p>
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
            <button
              onClick={() => setCount(count - 1)}
              className="h-[30px] w-[30px] rounded-full bg-[#46A358] text-white"
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="h-[30px] w-[30px] rounded-full bg-[#46A358] text-white"
            >
              +
            </button>
            <button className="rounded-[6px] bg-[#46A358] px-[24px] py-[8px] text-[14px] font-bold text-white">
              BUY NOW
            </button>
            <button className="rounded-[6px] border border-[#46A358] px-[24px] py-[8px] text-[14px] font-bold text-[#46A358]">
              ADD TO CART
            </button>
          </div>

          <p className="mt-[16px] text-[13px] text-gray-500">
            SKU: 1995751877966
          </p>
          <p className="mt-[4px] text-[13px] text-gray-500">
            Categories: Potter Plants
          </p>
          <p className="mt-[4px] text-[13px] text-gray-500">
            Tags: Home, Garden, Plants
          </p>
          <p className="mt-[8px] text-[13px] font-bold">Share this products:</p>
        </div>
      </div>

      <div className="mt-[40px] flex gap-[24px] text-[15px]">
        <p className="font-bold text-[#46A358]">Product Description</p>
        <p>Reviews (19)</p>
      </div>

      <div className="mt-[16px] text-[13px] text-gray-500">
        <p>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <p className="mt-[16px] font-bold text-[#3D3D3D]">Living Room:</p>
        <p>The ceramic cylinder planters come with a wooden stand.</p>
        <p className="mt-[16px] font-bold text-[#3D3D3D]">Dining Room:</p>
        <p>The benefits of houseplants are endless.</p>
        <p className="mt-[16px] font-bold text-[#3D3D3D]">Office:</p>
        <p>The ceramic cylinder planters come with a wooden stand.</p>
      </div>

      <h2 className="mt-[64px] text-[16px] font-bold text-[#46A358]">
        Related Products
      </h2>

      <div className="mt-[24px] px-[40px]">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent>
            <CarouselItem className="basis-1/2 lg:basis-1/4">
              <Link to="/product/4">
                <img
                  src={products[3].img}
                  alt=""
                  className="w-full bg-[#FBFBFB]"
                />
                <p className="mt-[8px] text-[14px]">{products[3].name}</p>
                <p className="font-bold text-[#46A358]">${products[3].price}</p>
              </Link>
            </CarouselItem>

            <CarouselItem className="basis-1/2 lg:basis-1/4">
              <Link to="/product/5">
                <img
                  src={products[4].img}
                  alt=""
                  className="w-full bg-[#FBFBFB]"
                />
                <p className="mt-[8px] text-[14px]">{products[4].name}</p>
                <p className="font-bold text-[#46A358]">${products[4].price}</p>
              </Link>
            </CarouselItem>

            <CarouselItem className="basis-1/2 lg:basis-1/4">
              <Link to="/product/6">
                <img
                  src={products[5].img}
                  alt=""
                  className="w-full bg-[#FBFBFB]"
                />
                <p className="mt-[8px] text-[14px]">{products[5].name}</p>
                <p className="font-bold text-[#46A358]">${products[5].price}</p>
              </Link>
            </CarouselItem>

            <CarouselItem className="basis-1/2 lg:basis-1/4">
              <Link to="/product/7">
                <img
                  src={products[6].img}
                  alt=""
                  className="w-full bg-[#FBFBFB]"
                />
                <p className="mt-[8px] text-[14px]">{products[6].name}</p>
                <p className="font-bold text-[#46A358]">${products[6].price}</p>
              </Link>
            </CarouselItem>

            <CarouselItem className="basis-1/2 lg:basis-1/4">
              <Link to="/product/9">
                <img
                  src={products[8].img}
                  alt=""
                  className="w-full bg-[#FBFBFB]"
                />
                <p className="mt-[8px] text-[14px]">{products[8].name}</p>
                <p className="font-bold text-[#46A358]">${products[8].price}</p>
              </Link>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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

export default ProductView;
