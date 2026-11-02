import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "../data";
import { useCart } from "./CartContext";
const Favorites = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="max-w-[1200px] mx-auto px-[16px] py-[16px] text-[#3D3D3D]">
      <h1 className="text-[24px] font-bold">Корзина</h1>
      <div className="mt-[16px] flex flex-col gap-[12px]">
        {cart.map((el, i) => (
          <div
            key={i}
            className="flex items-center gap-[16px] bg-[#FBFBFB] p-[12px] rounded-[8px]"
          >
            <img src={el.img} className="w-[70px] h-[70px] object-contain" />
            <h3 className="flex-1">{el.name}</h3>
            <button className="h-[30px] w-[30px] rounded-full bg-[#46A358] text-white">
              -
            </button>
            <p>1</p>
            <button className="h-[30px] w-[30px] rounded-full bg-[#46A358] text-white">
              +
            </button>
            <p className="font-bold text-[#46A358]">${el.price}</p>
            <button onClick={() => removeFromCart(el.id)}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
