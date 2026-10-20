import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center max-w-[1200px] mx-auto">
        <div>
          <h1 className="text-[55px]">
            Transforming Data <br /> into{" "}
            <span className="bg-blue-600 rounded-full p-[8px] text-[50px]">
              Decisions
            </span>
          </h1>
          <p className="text-[13px]">
            Leverage the power of machine learning and AI to unlock <br />{" "}
            insights and drive business growth
          </p>
          <button className="bg-[#0A84FF] rounded-xl px-[10px] h-[40px]">
            Book a Meeting
          </button>
          <img src="/public/clients (1).png" className="mt-[10px]" alt="" />
        </div>
        <img src="/public/robot area (1).png" className="w-[600px]" alt="" />
      </div>

      <div className="flex border-y p-[10px] border-[#0A84FF] max-w-[1200px] mx-auto justify-center">
        <img src="/public/Card (6).png" alt="" />
        <img src="/public/Card (11).png" alt="" />
        <img src="/public/Card (12).png" alt="" />
        <img src="/public/Card (7).png" alt="" />
        <img src="/public/Card (8).png" alt="" />
      </div>

      <div className="mt-[100px] text-[45px] max-w-[1200px] mx-auto text-center">
        <h1>
          Our Ultimate Set of Services for Your <br /> Ideas Implementation
        </h1>
      </div>
      <div className="flex justify-around mt-[150px] max-w-[1200px] mx-auto w-[90%] m-auto ">
        <div className="w-[300px] p-[10px] text-center justify-center h-[400px] rounded-2xl bg-[#141414]">
          <img src="/public/72355892508 1 (9).png" className="m-auto" alt="" />
          <div className="flex flex-col gap-[10px]  mt-[20px]">
            <h2>Predictive Analytics</h2>
            Forecast trends and make data-driven decisions with our advanced ML
            models.
          </div>
        </div>
        <div className="w-[300px] p-[10px] text-center justify-center h-[400px] rounded-2xl bg-[#141414]">
          <img src="/public/72355892508 1 (10).png" className="m-auto" alt="" />
          <div className="flex flex-col gap-[10px]  mt-[20px]">
            <h2>AI Consulting</h2>
            Expert guidance on implementing AI solutions for your business
            needs.
          </div>
        </div>
        <div className="w-[300px] p-[10px] text-center justify-center h-[400px] rounded-2xl bg-[#141414]">
          <img src="/public/72355892508 1 (11).png" className="m-auto" alt="" />
          <div className="flex flex-col gap-[10px] mt-[20px]">
            <h2>Data Engineering</h2>
            Build robust data pipelines and infrastructure for ML operations.
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-[50px] text-center mt-[100px]">
          Frequently Asked Questions
        </h1>
        <div>
          <div className="w-[80%] m-auto h-[250px] bg-[#1E1E1E] rounded-3xl mt-[100px] p-[10px]">
            <div className="flex justify-around items-center">
              <img src="/public/Container (8).png" alt="" />
              <h1>What services does Catalyst Analytics provide?</h1>
              <img
                className="w-[40px] h-[40px]"
                src="/public/Icon (12).png"
                alt=""
              />
            </div>
            <h1 className="w-[70%] m-auto mt-[20px] text-[19px]">
              Catalyst Analytics offers a range of services including design,
              engineering, and project management. We specialize in user
              experience design, web development, mobile app development, custom
              software development, branding and identity, and more.
            </h1>
          </div>
          <div className="w-[80%] m-auto h-[130px] bg-[#1E1E1E] flex justify-around rounded-3xl mt-[20px] p-[10px] items-center">
            <img src="/public/Container (9).png" alt="" />
            <h1>Lorem Ipsum is simply dummy text of the printing </h1>
            <img
              className="w-[40px] h-[40px]"
              src="/public/Icon (13).png"
              alt=""
            />
          </div>
          <div className="w-[80%] m-auto h-[130px] bg-[#1E1E1E] flex justify-around rounded-3xl mt-[20px] p-[10px] items-center">
            <img src="/public/Container (10).png" alt="" />
            <h1>Lorem Ipsum is simply dummy text of the printing </h1>
            <img
              className="w-[40px] h-[40px]"
              src="/public/Icon (13).png"
              alt=""
            />
          </div>
          <div className="w-[80%] m-auto h-[130px] bg-[#1E1E1E] flex justify-around rounded-3xl mt-[20px] p-[10px] items-center">
            <img src="/public/Container (11).png" alt="" />
            <h1>Lorem Ipsum is simply dummy text of the printing </h1>
            <img
              className="w-[40px] h-[40px]"
              src="/public/Icon (13).png"
              alt=""
            />
          </div>
          <div className="w-[80%] m-auto h-[130px] bg-[#1E1E1E] flex justify-around rounded-3xl mt-[20px] p-[10px] items-center">
            <img src="/public/Container (12).png" alt="" />
            <h1>Lorem Ipsum is simply dummy text of the printing </h1>
            <img
              className="w-[40px] h-[40px]"
              src="/public/Icon (13).png"
              alt=""
            />
          </div>
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
    </>
  );
};

export default Home;
