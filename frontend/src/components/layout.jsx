import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiLocationPin } from "react-icons/tfi";
import { FiArrowRight } from "react-icons/fi";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import MobileMenu from "../components/MobileMenu";

const Layout = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isMobileSubMenu, setIsMobileSubMenu] = useState(false);
  return (
    <div className="w-[100%] h-[100%] p-0 m-0 relative">
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
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? " text-md text-orange-400 font-bold relative"
              : "text-md text-white font-bold relative"
          }
        >
          ABOUT US
        </NavLink>
        <NavLink
          to="/our-team"
          className={({ isActive }) =>
            isActive
              ? " text-md text-orange-400 font-bold relative"
              : "text-md text-white font-bold relative"
          }
        >
          TEAM
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? " text-md text-orange-400 font-bold relative"
              : "text-md text-white font-bold relative"
          }
        >
          CONTACTS
        </NavLink>
        {/* <ul className=" w-4/6 p-2 hidden group-hover:lg:grid hover:grid grid-cols-2 h-72 gap-2 bg-white absolute top-28">
          <li className=" border-r-2 px-6">
            <p>web dev</p>
            <p>app dev</p>
          </li>
          <li className="px-6">yoola</li>
        </ul> */}
      </menu>
      <>
        <Outlet />
      </>

      <footer className="  w-full bg-blue-950 py-12 px-6 lg:px-28 text-white">
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className="">
            <p className=" text-3xl font-bold">consulting</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur
              <br />
              adipisicing elit.
            </p>

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
            <p>
              Sign up for Alerts, Special Offers, Education
              <br />
              and Updates
            </p>

            <div className="flex items-center w-full">
              <input
                className="p-2 rounded-sm"
                type="text"
                name=""
                id=""
                placeholder="enter-your email"
              />
              <div className="h-10 p-2 bg-orange-500 flex items-center rounded-sm">
                <FaArrowRightLong />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
