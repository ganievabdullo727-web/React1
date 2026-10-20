import React from "react";
import { Link } from "react-router";

const CareerDetails = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-[10px]">
      <div className="w-[80%] m-auto h-[330px] bg-[#141414] rounded-4xl mt-[100px] bg-[url('/image%206%20(2).png')] bg-cover bg-center flex flex-col items-center justify-center">
        <h1 className="text-[60px]">Web Designer</h1>
        <button className="bg-[#0A84FF]   px-[50px] py-[10px] rounded-xl">
          Apply now
        </button>
      </div>

      <div className="w-full h-[300px] rounded-xl flex flex-col mt-[70px] gap-[20px] justify-center items-center bg-[url('/image%206.png')] bg-cover bg-center">
        <h1 className="text-lg bg-transparent text-[60px] font-bold">
          Web Designer
        </h1>

        <button className="bg-[#0A84FF]   px-[50px] py-[10px] rounded-xl">
          Apply Now
        </button>
      </div>

      <div className="mt-[80px] flex justify-between">
        {" "}
        <div className="bg-[#1A1A1A] w-[720px] flex flex-col gap-[75px] p-[40px] rounded-2xl">
          <div className="flex bg-transparent flex-col gap-[30px]">
            <h1 className="bg-transparent text-[30px]">About this position</h1>
            <p className="bg-transparent text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="bg-transparent text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="bg-transparent text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className="flex bg-transparent flex-col gap-[30px]">
            <h1 className="bg-transparent text-[30px]">Responsibilities</h1>
            <p className="bg-transparent text-gray-400">
              -Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <p className="bg-transparent text-gray-400">
              -Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>

            <p className="bg-transparent text-gray-400">
              -Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>

          <div className="flex bg-transparent flex-col gap-[30px]">
            <h1 className="bg-transparent text-[30px]">Requirements</h1>
            <p className="bg-transparent text-gray-400">
              -Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <p className="bg-transparent text-gray-400">
              -Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>

            <p className="bg-transparent text-gray-400">
              -Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="flex bg-transparent flex-col gap-[30px]">
            <h1 className="bg-transparent text-[30px]">Benefits</h1>
            <p className="bg-transparent text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="bg-transparent text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="bg-transparent text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="bg-[#1A1A1A] p-[40px] flex flex-col rounded-2xl h-[550px] w-[450px] gap-[15px]">
          <h1 className="bg-transparent text-[35px]">Web Designer</h1>
          <div className="bg-[#1F1F1F] px-[15px] py-[10px] rounded-3xl w-[300px]">
            <h1 className="bg-transparent">Salary - $45.000-$60000 per year</h1>
          </div>
          <div className="bg-[#1F1F1F] px-[15px] py-[10px] rounded-3xl w-[300px]">
            <h1 className="bg-transparent">Experience +1year</h1>
          </div>
          <div className="bg-[#1F1F1F] px-[15px] py-[10px] rounded-3xl w-[300px]">
            <h1 className="bg-transparent">Deadline - 30/09/2025</h1>
          </div>
          <h1 className="bg-transparent text-[30px]">SKILLS</h1>
          <p className="bg-transparent">
            Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.),
            strong understanding of UI/UX design principles, responsive design
            expertise.
          </p>
          <button className="bg-[#0A84FF]  hover:bg-[#146dc5]  py-[10px] px-[40px] rounded-xl">
            Apply Now
          </button>
        </div>
      </div>

      <div className='flex flex-col gap-[20px] p-[45px] w-[60%] rounded-xl mt-[75px] bg-[#141414]'>
  <h1 className='bg-transparent'>Apply Now</h1>
  <div className='flex bg-transparent items-center gap-[20px]'>
<input className='border border-gray-800 rounded-[5px] w-[450px] py-[5px] px-[10px]' type="text" placeholder='First Name*' name="" id="" />
<input  className='border border-gray-800 rounded-[5px] w-[450px] py-[5px] px-[10px]' type="text" placeholder='Last Name*' name="" id="" />
  </div>
  <input className='border border-gray-800 rounded-[5px] w-[650px] py-[5px] px-[10px]' placeholder='Email*' type="text" name="" id="" />
  <input className='border border-gray-800 rounded-[5px] w-[650px] py-[5px] px-[10px]' placeholder='Headline (Optional)' type="text" name="" id="" />
  <input className='border border-gray-800 rounded-[5px] w-[650px] py-[5px] px-[10px]' placeholder='Phone Number' type="text" name="" id="" />
<textarea  className='border border-gray-800 rounde rounded-[5px] w-[100%] py-[5px] px-[10px]' placeholder='Application Submission' name="" id=""></textarea>

<button className='bg-[#0A84FF]  rounded-xl py-[10px]'>Submit Application</button>
</div>

      <div>
        <div className="flex justify-around mt-[100px]">
          <div className=" w-[47%] flex flex-col items-start gap-10 lg:p-10 p-5 bg-[#191919] rounded-2xl">
            <div className="flex items-center gap-5">
              <img src="../../public/w3.png" alt="" />
              <h1 className="text-2xl">Web Designer</h1>
            </div>
            <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
              <h1>Salary</h1>
              <div className=" p-1 bg-blue-600 rounded-4xl"></div>
              <b>$45,000 - $60,000 per year</b>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-2">
              <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                <h1>Experience</h1>
                <div className=" p-1 bg-blue-600 rounded-4xl"></div>
                <b>1+ year</b>
              </div>
              <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                <h1>Deadline</h1>
                <div className=" p-1 bg-blue-600 rounded-[50%]"></div>
                <b>30/09/2025</b>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <h1 className="text-2xl">Skills</h1>
              <h1>
                Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
                etc.), <br />
                strong understanding of UI/UX design principles, responsive{" "}
                <br />
                design expertise.
              </h1>
            </div>
            <button className="bg-[#0A84FF] rounded-xl px-[10px] w-[90%] m-auto h-[40px]">
              Apply Now
            </button>
          </div>

          <div className="w-[47%] flex flex-col items-start gap-10 lg:p-10 p-5 bg-[#191919] rounded-2xl">
            <div className="flex items-center gap-5">
              <img src="../../public/w3.png" alt="" />
              <h1 className="text-2xl">Web Designer</h1>
            </div>
            <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
              <h1>Salary</h1>
              <div className=" p-1 bg-blue-600 rounded-4xl"></div>
              <b>$45,000 - $60,000 per year</b>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-2">
              <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                <h1>Experience</h1>
                <div className=" p-1 bg-blue-600 rounded-4xl"></div>
                <b>1+ year</b>
              </div>
              <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                <h1>Deadline</h1>
                <div className=" p-1 bg-blue-600 rounded-[50%]"></div>
                <b>30/09/2025</b>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <h1 className="text-2xl">Skills</h1>
              <h1>
                Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
                etc.), <br />
                strong understanding of UI/UX design principles, responsive{" "}
                <br />
                design expertise.
              </h1>
            </div>
            <button className="bg-[#0A84FF] rounded-xl px-[10px] w-[90%] m-auto h-[40px]">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-around mt-[50px]">
          <div className=" w-[47%] flex flex-col items-start gap-10 lg:p-10 p-5 bg-[#191919] rounded-2xl">
            <div className="flex items-center gap-5">
              <img src="../../public/w3.png" alt="" />
              <h1 className="text-2xl">Web Designer</h1>
            </div>
            <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
              <h1>Salary</h1>
              <div className=" p-1 bg-blue-600 rounded-4xl"></div>
              <b>$45,000 - $60,000 per year</b>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-2">
              <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                <h1>Experience</h1>
                <div className=" p-1 bg-blue-600 rounded-4xl"></div>
                <b>1+ year</b>
              </div>
              <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                <h1>Deadline</h1>
                <div className=" p-1 bg-blue-600 rounded-[50%]"></div>
                <b>30/09/2025</b>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <h1 className="text-2xl">Skills</h1>
              <h1>
                Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
                etc.), <br />
                strong understanding of UI/UX design principles, responsive{" "}
                <br />
                design expertise.
              </h1>
            </div>
            <button className="bg-[#0A84FF] rounded-xl px-[10px] w-[90%] m-auto h-[40px]">
              Apply Now
            </button>
          </div>

          <div className="w-[47%] flex flex-col items-start gap-10 lg:p-10 p-5 bg-[#191919] rounded-2xl">
            <div className="flex items-center gap-5">
              <img src="../../public/w3.png" alt="" />
              <h1 className="text-2xl">Web Designer</h1>
            </div>
            <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
              <h1>Salary</h1>
              <div className=" p-1 bg-blue-600 rounded-4xl"></div>
              <b>$45,000 - $60,000 per year</b>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-2">
              <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                <h1>Experience</h1>
                <div className=" p-1 bg-blue-600 rounded-4xl"></div>
                <b>1+ year</b>
              </div>
              <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                <h1>Deadline</h1>
                <div className=" p-1 bg-blue-600 rounded-[50%]"></div>
                <b>30/09/2025</b>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <h1 className="text-2xl">Skills</h1>
              <h1>
                Proficiency in Adobe Creative Suite (Photoshop, Illustrator,
                etc.), <br />
                strong understanding of UI/UX design principles, responsive{" "}
                <br />
                design expertise.
              </h1>
            </div>
            <button className="bg-[#0A84FF] rounded-xl px-[10px] w-[90%] m-auto h-[40px]">
              Apply Now
            </button>
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
    </div>
  );
};

export default CareerDetails;
