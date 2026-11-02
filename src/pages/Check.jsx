import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import ras from "../Layout/imgpol/01 3.png";
import ras2 from "../Layout/imgpol//image 1.png";
import ras3 from "../Layout/imgpol/image 10 (1).png";
import ras4 from "../Layout/imgpol/image 2 (1).png";
import gr from "../Layout/socials/image 16.png"
import check from "../Layout/socials/thank-you 1.png"
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

import bank from "../Layout/socials/image 16.png"
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

let rasarr = [ras, ras2, ras3, ras4];
const Check = () => {
  const { t } = useTranslation();
  let [arr, setArr] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  let total = arr.reduce((sum, el) => sum + el.price * el.cnt, 0);
  return (
    <div className="pt-[100px]">
         <p className="ml-[100px]">
          <span className="font-bold">{t("Home")}</span>{t(" / Shop")} / {t("Checkout")}
        </p>
      <div className="mt-[10px]
       flex justify-center gap-[20px] items-start">
     
        <div className="">
          <div className="flex flex-wrap  w-[900px] gap-[25px]">
            <div className="">
              <p>{t("First Name")}</p>
              <Input type="text" className="w-[350px]" placeholder={t("Name")} />
            </div>
            <div className="">
              <p>{t("Last Name")}</p>
              <Input type="text" className="w-[350px]" placeholder={t("Name")} />
            </div>
            <div className="">
              <p>{t("Country / Region")}</p>
              <Input
                type="text"
                className="w-[350px]"
                placeholder={t("Select a country / region")}
              />
            </div>
            <div className="">
              <p>{t("Town / City")}</p>
              <Input type="text" className="w-[350px]" placeholder={t("Name")} />
            </div>
            <div className="">
              <p>{t("Street Address")}</p>
              <Input
                type="text"
                className="w-[350px]"
                placeholder={t("House number and street name")}
              />
            </div>
            <div className="">
              <Input
                type="text"
                className="w-[350px]"
                placeholder={t("Appartment, suite, unit, etc. (optional)")}
              />
            </div>
            <div className="">
              <p>{t("State")}</p>
              <Input
                type="text"
                className="w-[350px]"
                placeholder={t("Select a state")}
              />
            </div>
            <div className="">
              <p>{t("Zip")}</p>
              <Input
                type="text"
                className="w-[350px]"
                placeholder={t("Select a state")}
              />
            </div>
            <div className="">
              <p>{t("Email address")}</p>
              <Input type="text" className="w-[350px]" placeholder="" />
            </div>
            <div className="">
              <p>{t("Phone Number")}</p>
              <Input type="phone" className="w-[350px]" placeholder="" />
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" name="" id="" />
              <p>{t("Ship to a different address?")}</p>
            </div>
            <br />
            <div className="">
              <p>{t("Order notes (optional)")}</p>
              <textarea name="" id=""></textarea>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col gap=[15px]">
          <Table className='w-[405px]'>
            <TableCaption>{t("A list of your recent invoices.")}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>{t("Products")}</TableHead>
                <TableHead>{t("Subtotal")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                {arr.map((el,i)=>(
                    <TableRow key={el.id}>
                        <TableCell>
                             <div className="flex items-center gap-[15px]">
            <img className='w-[70px] h-[70px]' src={rasarr[i%rasarr.length]} alt="" />
            <div className="">
             <h1 className='font-semibold'>
              {el.name.slice(0,16)}
              </h1> 
              <p>SKU:{el.id}</p>
            </div>
            <p>(x{el.cnt})</p>
          </div>
                        </TableCell>
                        <TableCell>
                            <p className="text-[#46A358]">

                           ${el.price*el.cnt}.00
                            </p>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
          <div className="self-end flex flex-col gap-[10px]">

         
          <div className="flex justify-between self-end w-[332px] items-center">
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
  <div className="">
    <p>{t("Payment Method")}</p>

  </div>
  <div className="flex items-center gap-4">
    <input type="radio" name="" id="" />
    <img src={gr} alt="" />
  </div>

   <div className="flex items-center gap-4">
    <input type="radio" name="" id="" />
    <p>{t("Dorect bank transfer")}</p>
  </div>
     <div className="flex items-center gap-4">
    <input type="radio" name="" id="" />
    <p>{t("Cash on delivery")}</p>
  </div>
  
                <Dialog className='w-[580px]'>
  <DialogTrigger> <button  className="flex items-center text-white w-[332px] h-[40px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">

                {t("Place Order")}</button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>
            <div className="bg-[#F4FAF5] flex flex-col items-center gap-[15px]">
            <img src={check} alt="" />
            <p>{t("Your order has been received")}</p>
        </div>
      </DialogTitle>
      <DialogDescription>
        <div className="flex justify-center gap-[25px] items-center">
            <div className="">
                <p>{t("Order Number")}</p>
                <h1 className="font-semibold">19586687</h1>
            </div>|
             <div className="">
                <p>{t("Date")}</p>
                <h1 className="font-semibold">15 Sep, 2021</h1>
            </div>|
             <div className="">
                <p>{t("Total")}</p>
                <h1 className="font-semibold">{total}</h1>
            </div>|
              <div className="">
                <p>{t("Payment Method")}</p>
                <h1 className="font-semibold">{t("Cash on delivery")}</h1>
            </div>

        </div>
      </DialogDescription>
    </DialogHeader>
    <div className="flex flex-col gap-[15px] items-center">
    <Table className='w-[295px]'>
            <TableCaption>{t("A list of your recent invoices.")}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>{t("Products")}</TableHead>
                <TableHead>{t("Subtotal")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                {arr.map((el,i)=>(
                    <TableRow key={el.id}>
                        <TableCell>
                             <div className="flex items-center gap-[15px]">
            <img className='w-[70px] h-[70px]' src={rasarr[i%rasarr.length]} alt="" />
            <div className="">
             <h1 className='font-semibold'>
              {el.name.slice(0,16)}
              </h1> 
              <p>{t("SKU:")}{el.id}</p>
              
            <p>(x{el.cnt})</p>
            </div>
          </div>
                        </TableCell>
                        <TableCell>
                            <p className="text-[#46A358]">

                           ${el.price*el.cnt}.00
                            </p>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>
            <div className="flex justify-between self-end w-[232px] items-center">
    <p>{t("Total")}</p>
    <p className="text-[#46A358]">${total}.00</p>
  </div>
  <p className="text-center">{t("Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.")}</p>
 <Link to={"/"}>
 
  <button onClick={()=>{localStorage.removeItem("cart")}} className="flex items-center text-white w-[162px] h-[40px] rounded-[6px] bg-[#46A358] justify-center gap-[5px]">

                {t("Track your order")}</button>
 </Link>
                </div>
  </DialogContent>
</Dialog>
        </div>
         </div>
      </div>
      <div className="hidden  text-black  lg:block mt-[90px] ">
              <div className="flex text-black  justify-center bg-[#FBFBFB]">
                <img src={group} alt="" />
              </div>
              <div className="flex justify-center  items-center mt-[50px] bg-[#EDF6EF] h-[88px]  gap-[145px]">
       <img src={logo} alt="" />
       <div className="flex items-center gap-[15px]">
        <img src={loc} alt="" />
        <p className="">70 West Buckingham Ave. <br />
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

export default Check;