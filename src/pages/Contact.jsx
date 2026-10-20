import React from "react";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-[10px]">
      <div className="w-[80%] m-auto h-[330px] bg-[#141414] rounded-4xl mt-[100px] flex justify-around items-center">
        <div className="flex flex-col gap-[20px] w-[45%]">
          <h1 className="text-[25px]">Contact Us</h1>
          <p className="text-[15px]">
            Get in touch with our team to discuss how we can help transform your
            business. We’re here to help.
          </p>
          <button className="bg-[#0A84FF] rounded-xl px-[10px] w-[200px] h-[40px]">
            Get In Touch Now
          </button>
        </div>
        <img className="w-[40%]" src="/public/calogo1 2 (3).png" alt="" />
      </div>
      <div className="flex justify-around items-center">
        <div className="flex flex-col gap-[20px] p-[45px] w-[50%] rounded-xl mt-[75px] bg-[#141414]">
          <h1 className="bg-transparent">Apply Now</h1>
          <div className="flex bg-transparent items-center gap-[20px]">
            <input
              className="border border-gray-800 rounded-[5px] w-[450px] py-[5px] px-[10px]"
              type="text"
              placeholder="First Name*"
              name=""
              id=""
            />
            <input
              className="border border-gray-800 rounded-[5px] w-[450px] py-[5px] px-[10px]"
              type="text"
              placeholder="Last Name*"
              name=""
              id=""
            />
          </div>
          <input
            className="border border-gray-800 rounded-[5px] w-[530px] py-[5px] px-[10px]"
            placeholder="Email*"
            type="text"
            name=""
            id=""
          />
          <input
            className="border border-gray-800 rounded-[5px] w-[530px] py-[5px] px-[10px]"
            placeholder="Headline (Optional)"
            type="text"
            name=""
            id=""
          />
          <input
            className="border border-gray-800 rounded-[5px] w-[530px] py-[5px] px-[10px]"
            placeholder="Phone Number"
            type="text"
            name=""
            id=""
          />
          <textarea
            className="border border-gray-800 rounde rounded-[5px] w-[100%] py-[5px] px-[10px]"
            placeholder="Application Submission"
            name=""
            id=""
          ></textarea>

          <button className="bg-[#0A84FF]  rounded-xl py-[10px]">
            Submit Application
          </button>
        </div>

        <div className="flex flex-col gap-[20px] mt-[100px]">
          <img
            className="h-[300px]"
            src="/public/Frame 1707480648.png"
            alt=""
          />
          <img src="/public/Frame 1707480649.png" alt="" />
        </div>
      </div>

      <footer className="border-t border-white mt-[200px] max-w-[1200px] mx-auto">
        <nav className="flex gap-10 p-5  items-center justify-around max-w-[1200px] mx-auto ">
          <img src="/public/Logo (15).png" alt="" />
          <div className="flex gap-[30px]">
            <Link to={"/"}>Home</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/careers"}>Careers</Link>
            <Link to={"/careerDetails"}>Career Details</Link>
            <Link to={"/Contact"}>Contact</Link>
          </div>
          <img src="/public/Sub Container (1).png" alt="" />
        </nav>
        <div className="w-[80%] m-auto mt-[20px]">
          <img src="/public/Container (13).png" alt="" />
          <p className="mt-[30px] text-gray-600 text-center">
            © 2025 Catalyst Analytics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
