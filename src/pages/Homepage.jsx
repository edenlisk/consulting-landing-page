import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiLocationPin } from "react-icons/tfi";
import { FiArrowRight } from "react-icons/fi";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import MobileMenu from "../components/MobileMenu";

const HomePage = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isMobileSubMenu, setIsMobileSubMenu] = useState(false);
  return (
    <>
      {/* HEADER */}
      <section className=" w-full h-fit bg-red-400  px-6 py-4 lg:px-28 lg:grid flex lg:grid-cols-12 items-center justify-between  ">
        <h1 className=" text-4xl bg-lime-200 col-start-1 col-end-3">Helllo!</h1>
        <span className="md:hidden">
          <Hamburger
            size={27}
            toggled={isMobileMenu}
            toggle={() => {
              setIsMobileMenu(!isMobileMenu);
              setIsMobileSubMenu(false);
            }}
          />
        </span>
        <ul className="hidden col-start-6 col-end-13 px-1 lg:flex items-center justify-between">
          <li className="flex justify-start items-center gap-1">
            <TfiLocationPin className="text-2xl text-white font-semibold" />
            <p className="text-lg text-white font-semibold">Kigali,Rwanda</p>
          </li>
          <li className="flex justify-start items-center gap-1">
            <TfiLocationPin className="text-2xl text-white font-semibold" />
            <p className="text-lg text-white font-semibold">Kigali,Rwanda</p>
          </li>
          <li className="flex justify-start items-center gap-1">
            <TfiLocationPin className="text-2xl text-white font-semibold" />
            <p className="text-lg text-white font-semibold">Kigali,Rwanda</p>
          </li>
        </ul>
      </section>

      <MobileMenu
        isMobileMenu={isMobileMenu}
        setIsMobileMenu={setIsMobileMenu}
      />
      {/* DESKTOP ONLY HEADER */}
      <menu className=" w-full h-fit bg-red-600 px-6 py-2 lg:px-28 hidden md:flex items-center justify-between group ">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? " text-md text-orange-400 font-bold relative"
              : "text-md text-white font-bold relative"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? " text-md text-orange-400 font-bold relative"
              : "text-md text-white font-bold relative"
          }
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive
              ? " text-md text-orange-400 font-bold relative"
              : "text-md text-white font-bold relative"
          }
        >
          CONTACTS
        </NavLink>
        <ul className=" w-4/6 p-2 hidden group-hover:lg:grid hover:grid grid-cols-2 h-72 gap-2 bg-white absolute top-28">
          <li className=" border-r-2 px-6">
            <p>web dev</p>
            <p>app dev</p>
          </li>
          <li className="px-6">yoola</li>
        </ul>
      </menu>

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
          <li className=" md:w-[90%] col-span-4 h-fit space-y-2 bg-white shadow-lg rounded-md relative">
            <img
              src="./src/images/blackimage.webp"
              alt="people in office"
              className="w-full h-[220px] object-cover bg-center"
            />
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

      <section className=" h-fit w-full bg-blue-950 py-12 text-white">
        <div className="px-6 grid grid-cols-1 md:grid-cols-3">
          <div className="">
            <p className=" text-3xl font-bold">consulting</p>
            <p>Lorem ipsum, dolor sit amet consectetur 
              <br />
              adipisicing elit.</p>

            <div className=""></div>
            <div className="flex gap-2 items-center">
              <BsTwitter />
              <BsTwitter />
              <BsTwitter />
            </div>
          </div>

          <div className="">
            <p className="pb-1 text-3xl font-bold">extra links</p>
            <ul className="grid grid-cols-2 gap-y-3">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-3xl font-bold">subscribe</p>
            <p>Sign up for Alerts, Special Offers, Education
              <br />
                and Updates</p>

            <div className="flex items-center w-full">
            <input className="p-2 rounded-sm" type="text" name="" id="" placeholder="enter-your email" />
            <div className="h-10 p-2 bg-orange-500 flex items-center rounded-sm">
            <FaArrowRightLong />
            </div>
            <div>

            </div>
          </div>
          </div>
         
        </div>
      </section>
    </>
  );
};
export default HomePage;
