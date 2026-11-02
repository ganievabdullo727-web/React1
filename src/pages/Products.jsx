import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import group from "../Layout/imgpol/Group 23.png"
import logo from "..///Layout/imgpol/Logo (12).png"
import loc from "../Layout/imgpol/Location.png"
import mes from "../Layout//imgpol/Message.png"
import cal from "../Layout/imgpol/Calling.png"
import face from "../Layout/socials/Facebook.png"
import inst from "../Layout/socials/Instagram.png"
import link from "../Layout/socials/Linkedin.png"
import twt from "../Layout/socials/Twitter.png"
import un from "../Layout/socials/Union.png"
import ras from "../Layout/imgpol/01 3.png";
import ras2 from "../Layout/imgpol//image 1.png";
import ras3 from "../Layout/imgpol/image 10 (1).png";
import ras4 from "../Layout/imgpol/image 2 (1).png";
import del from "../Layout/socials/Delete.svg"

import bank from "../Layout/socials/image 16.png"
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { Link } from 'react-router'
import { useTranslation } from "react-i18next";
let rasarr = [ras, ras2, ras3, ras4];

let dapi = "https://test-swagger-2ph6.onrender.com/products?limit=12";

const Products = () => {
  const { t } = useTranslation();
  let [arr, setArr] = useState(
  JSON.parse(localStorage.getItem("cart")) || []


);

    let [data, setData] = useState([]);

let total = arr.reduce((sum, el) => sum + el.price * el.cnt, 0);
  
function deleteCart(id) {
  let users=JSON.parse(localStorage.getItem("cart"))
  users=users.filter((el)=>el.id!==id)
  
  localStorage.setItem("cart", JSON.stringify(users));
  setArr(users)
}

  async function getData() {
    try {
      let url = dapi;


      let token = localStorage.getItem("token");

      let { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div
    className='pt-[100px]'>
      <div className="flex justify-center  ">

      <div className="flex justify-center gap-[155px]">
      <Table className='w-[782px]'>
  <TableCaption>{t("A list of your recent invoices.")}</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="">{t("Products")}</TableHead>
      <TableHead>{t("Price")}</TableHead>
      <TableHead>{t("Quantity")}</TableHead>
      <TableHead>{t("Total")}</TableHead>
      <TableHead ></TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {arr.map((el,i)=>{
      return <TableRow>
        <TableCell>
          <div className="flex items-center gap-[15px]">
            <img className='w-[70px] h-[70px]' src={rasarr[i%rasarr.length]} alt="" />
            <div className="">
             <h1 className='font-semibold'>
              {el.name?.slice(0,16)}
              </h1> 
              <p>{t("SKU:")}{el.id}</p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <p>
            ${el.price}.00
            
            </p>
            
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2.5">
  <p onClick={()=>{
     if (el.cnt > 1) {
        el.cnt--;
        setArr([...arr]);
        localStorage.setItem("cart", JSON.stringify(arr));
      }
  }} className='   flex  bg-[#46A358] text-white text-[16px] justify-center rounded-[50%] w-[28px] h-[28px]'>-</p>
<p>{el.cnt}</p>
        <p onClick={()=>{
           {
      el.cnt++;
      setArr([...arr]);
      localStorage.setItem("cart", JSON.stringify(arr));
    }
        }} className='   flex  bg-[#46A358] text-white text-[16px] justify-center rounded-[50%] w-[28px] h-[28px]'>+</p>

              </div>
      
            </TableCell>
            <TableCell>

              {el.price*el.cnt}
            </TableCell>
            <TableCell>
              <img onClick={()=>{deleteCart(el.id)}} src={del} alt="" />
            </TableCell>
      </TableRow>
    })}
  </TableBody>
</Table>
<div className="flex flex-col gap-[15px]">
  <h1 className='font-semibold'>{t("Cart Totals")}</h1>
  <p>{t("Coupon Apply")}</p>
  <div className="flex items-center">

  <Input type="text" placeholder={t("Enter coupon code here...")} className='w-[250px]' />
  <button className="flex items-center text-white w-[100px] h-[35px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">

                {t("Apply")}</button>
  
  </div>
  <div className="flex justify-between w-[332px] items-center">
    <p>{t("Subtotal")}</p>
    <p>{total}</p>
  </div>
  <div className="flex justify-between w-[332px] items-center">
    <p>{t("Coupon Discount")}</p>
    <p>(-) 00.00</p>
  </div>
  <div className="flex justify-between w-[332px] items-center">
    <h1>{t("Total")}</h1>
    <p className='text-[#46A358]'>${total}.00</p>
  </div>
  <Link to={"/check"}>
   <button  className="flex items-center text-white w-[332px] h-[40px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">

                {t("Proceed To Checkout")}</button>
  </Link>
                <p className='text-center text-[#46A358]'>{t("Continue Shopping")}</p>
</div>
      </div>
      </div>
<div className="">
  
        <div className="flex justify-center gap-[15px]">

       
        {data?.slice(0,5).map((el,i)=>{
          return    <div key={el.id} className="w-[175px]  lg:w-[360px] ">
                    <img
                      className="bg-[#FBFBFB]"
                      src={rasarr[i % rasarr.length]}
                      alt=""
                    />
                 
                    <h1>{el.name.slice(0,9)}</h1>
                    <p className="text-[#46A358] font-bold text-[18px]">
                      ${el.price}.00
                    </p>
                  </div>
      
        })}
         </div>

</div>
<div className="hidden lg:block mt-[50px]">
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
            <h1 className="text-[18px] font-bold">My account</h1>
            <p className="flex flex-col gap-[5px]">My Account <br />
Our stores <br />
Contact us  <br />
Career <br />
Specials</p>
          </div>
             <div className="">
            <h1 className="text-[18px] font-bold">Help & Guide</h1>
            <p className="flex flex-col gap-[5px]">Help Center <br />
How to Buy <br />
Shipping & Delivery <br />
Product Policy <br />
How to Return</p>
          </div>
             <div className="">
            <h1 className="text-[18px] font-bold">Categories</h1> 
            <p className="flex flex-col gap-[5px]">House Plants <br />
Potter Plants <br />
Seeds <br />
Small Plants <br />
Accessories</p>
          </div>
          <div className="flex flex-col gap-[7px] items-start">
            <h1 className="text-[18px] font-bold">Social Media</h1> 
            <div className="flex items-center gap-[25px]">
              <img src={face} alt="" />
              <img src={inst} alt="" />
              <img src={link} alt="" />
              <img src={un} alt="" />
              <img src={twt} alt="" />
            </div>
            <h1 className="text-[18px] font-bold">We accept</h1> 
            <img src={bank} alt="" />
            
          </div>
        </div>
        <hr className="mt-5" />
        <p className="flex justify-center mt-5">© 2021 GreenShop. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Products