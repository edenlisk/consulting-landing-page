import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { BiSolidTimeFive } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";

const HomePage = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isMobileSubMenu, setIsMobileSubMenu] = useState(false);
  return (
    <>
      {/* 1ST SECTION */}
      <section className=" w-full h-[800px] bg-[url('./src/images/office.webp')] bg-cover bg-center flex items-center text-white font-semibold">
        <div className="w-full h-fit py-24 px-4 lg:px-28 space-y-6">
          <div className="flex  items-center gap-3 py-1">
            <span className="w-[70px] p-[1.8px] rounded-full bg-red-500"></span>
            <p className="text-lg">Meet Consulting</p>
          </div>
          <p className="py-1 text-5xl md:text-6xl w-full md:w-3/4">
            Elevate business operations with Consulting
          </p>
          <p className="text-lg py-1">
            We know how to achieve the highest standards most productively
          </p>
          <div className="flex items-center gap-6 space-y-4">
            <button
              type="button"
              className=" bg-orange-400 text-lg py-3 px-6 rounded-md"
            >
              Learn more
            </button>
            <div className="flex items-center gap-2">
              <p className="md:text-lg">All services</p>
              <FiArrowRight className=" text-xl text-orange-500 hover:text-white" />
            </div>
          </div>
        </div>
      </section>
      {/* 2ND SECTION */}
      <section className=" w-full h-fit px-6 py-12 md:px-28 md:py-24 md:flex md:gap-16 md:items-center justify-center">
        <div className="w-full h-[300px] mb-10 md:h-[400px] lg:h-[300px] bg-[url('./src/images/consult.webp')] bg-cover bg-center font-semibold relative">
          {/* TO ADD IMAGE CONTAINER TO BE USED AS IF IT WAS A BACKGROUND */}
          <span className="flex flex-col md:flex-row items-center gap-2 bg-white p-4 shadow-lg drop-shadow absolute -top-6 right-8 z-30 rounded">
            <p>Innovation</p>
          </span>
          <span className="flex flex-col md:flex-row items-center gap-2 bg-white py-14 px-2 shadow absolute top-24 -left-8 z-30 rounded">
            <p>Experts</p>
          </span>
          <span className="flex flex-col md:flex-row items-center gap-2 bg-white p-4 shadow absolute -bottom-6 right-24 z-30 rounded">
            <p>Human-focused</p>
          </span>
          <span className="hidden md:block py-10 px-20 bg-red-800 absolute -bottom-6 -left-4 -z-10 rounded"></span>
        </div>
        <div className="md:w-[90%] flex justify-start flex-col gap-4">
          <h2 className="text-4xl font-semibold">about us</h2>
          <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
          <p className="text-xl font-semibold">
            Above all, we believe that real change is possible and that tomorrow
            doesn’t have to be like today
          </p>

          <p className="text-md ">
            Solving social problems requires leaders from foundations,
            businesses, nonprofits, and governments to reimagine the systems and
            relationships that shape our world. We strive for a deep
            understanding of how to create social change.
          </p>
          <div className="flex items-center gap-2">
            <p className="md:text-lg">Read more</p>
            <FiArrowRight className=" text-xl text-orange-500 hover:text-blue-950" />
          </div>
        </div>
      </section>
      {/* 3RD SECTION */}
      <section className=" w-full h-fit px-6 py-12 md:px-28 md:py-24 space-y-6 bg-slate-200">
        <h2 className="m-0 text-4xl">Our services</h2>
        <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
        <li className="w-full h-fit grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ul className="w-full h-[250px] space-y-2 bg-white"></ul>
          <ul className="w-full h-[250px] space-y-2 bg-white"></ul>
          <ul className="w-full h-[250px] space-y-2 bg-white"></ul>
        </li>
      </section>
      {/* 4TH SECTION */}
      <section className="  w-full h-fit px-6 py-12 md:px-28 md:py-40 md:grid md:grid-cols-2 gap-3 items-center justify-center relative">
        <div className="w-full h-[513px] bg-orange-300 space-y-1 flex flex-col items-start"></div>
        <div className="w-full h-[513px] bg-orange-500 "></div>
        <div className=" w-2/4 h-fit bg-transparent grid grid-cols-2 gap-8 items-center justify-start absolute bottom-12 left-28">
          <div className="w-full h-[200px] rounded bg-orange-700 hidden lg:block"></div>
          <div className="w-full h-[200px] rounded bg-orange-900 hidden lg:block"></div>
        </div>
      </section>
      {/* 5TH PAGE CONTACTS */}
      <section className="  w-full h-fit px-6 py-12 md:px-28 md:py-24 space-y-6 bg-slate-200">
        <h2 className="m-0 text-4xl">Our team</h2>
        <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
        <ul className="w-full h-fit grid grid-cols-1 gap-6 md:grid-cols-2">
          <li className="w-full h-[250px] space-y-2 bg-white"></li>
          <li className="w-full h-[250px] space-y-2 bg-white"></li>
        </ul>
      </section>
      {/* 6TH PAGE CONTACTS */}
      <section className="  w-full h-fit px-6 py-12 md:px-28 md:py-24 md:grid md:grid-cols-2 gap-3 items-center justify-center bg-[url('./src/images/buildings.webp')] bg-cover bg-center">
        <div className="w-full h-[400px] bg-orange-300 space-y-1 flex flex-col items-start"></div>
        <div className="w-full h-[400px] bg-orange-500 "></div>
      </section>

      {/* 7TH PAGE CONTACTS */}
      <section className="hidden md:block w-full h-fit px-6 py-12 md:px-28 md:py-24 space-y-6">
        <h2 className="m-0 text-4xl">Our Products</h2>
        <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
        <ul className="w-full h-fit md:grid grid-cols-1 md:grid-cols-12">
          <li className=" md:w-[90%] col-span-4 h-fit bg-white shadow-lg rounded-md relative">
            <img
              src="./src/images/blackimage.webp"
              alt="people in office"
              className="w-full h-[220px] object-cover bg-center"
            />
            <div className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
            <IoAddSharp className="text-5xl"/>
            </div>
            <div className="p-2">
              <div className="w-[50px] p-[1.8px] rounded-full bg-red-500"></div>
              <p className=" font-semibold text-xl py-2">
                Narrow Your Focus to Prevent Overanalysis
              </p>
              <span className="w-full flex gap-2 items-center">
                <BiSolidTimeFive />
                <p>October 27, 2023</p>
              </span>
            </div>
          </li>
          <li className=" md:w-[90%] col-span-4 h-fit bg-white shadow-lg rounded-md relative">
            <img
              src="./src/images/consult.webp"
              alt="people in office"
              className="w-full h-[220px] object-cover bg-center"
            />
            <div className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
            <IoAddSharp className="text-5xl"/>
            </div>
            <div className="p-2">
              <div className="w-[50px] p-[1.8px] rounded-full bg-red-500"></div>
              <p className=" font-semibold text-xl py-2">
                Narrow Your Focus to Prevent Overanalysis
              </p>
              <span className="w-full flex gap-2 items-center">
                <BiSolidTimeFive />
                <p>October 27, 2023</p>
              </span>
            </div>
          </li>
          <li className=" md:w-[90%] col-span-4 h-fit bg-white shadow-lg rounded-md relative">
            <img
              src="./src/images/buildings.webp"
              alt="people in office"
              className="w-full h-[220px] object-cover bg-center"
            />
            <div className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
            <IoAddSharp className="text-5xl"/>
            </div>
            <div className="p-2">
              <div className="w-[50px] p-[1.8px] rounded-full bg-red-500"></div>
              <p className=" font-semibold text-xl py-2">
                Narrow Your Focus to Prevent Overanalysis
              </p>
              <span className="w-full flex gap-2 items-center">
                <BiSolidTimeFive />
                <p>October 27, 2023</p>
              </span>
            </div>
          </li>
        </ul>
      </section>

      {/* FOOTER SECTION */}
    </>
  );
};
export default HomePage;
