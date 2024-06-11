import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { menuLinks } from "./NavbarList";

const MobileMenu = ({ isMobileMenu, setIsMobileMenu }) => {
  const [isMobileSubMenu, setIsMobileSubMenu] = useState(false);
  const [heading, setIHeading] = useState("");

  return (
    <menu
      className={`w-full h-screen md:hidden flex flex-col absolute bg-red-400 duration-500 items-start gap-10 py-8 overflow-x-none z-50 ${
        isMobileMenu ? `left-0 top-18 ` : ` -left-full`
      }`}
    >
      {/* MOBILE MENU */}
      {menuLinks.map(({ name,sublinks }) => (
        <li key={name} className=" w-full flex flex-col gap-4 text-md font-bold text-white">
          <div className="flex justify-between items-center w-full px-8 uppercase">
            <NavLink
              to={`/${name}`}
              onClick={() => setIsMobileMenu(!isMobileMenu)}
              className={({ isActive }) =>
                isActive ? "text-orange-300 " : " "
              }
            >
              {name}
            </NavLink>
            <FaPlus
              className={` text-xl ${
                isMobileSubMenu && heading === name ? "rotate-45 duration-300 text-orange-300" : ""
              }`}
              onClick={() => {
                setIsMobileSubMenu(!isMobileSubMenu);
                setIHeading(name);
              }}
            />
          </div>

          {isMobileSubMenu && heading === name && (
            <div className="w-full col-span-full flex flex-col duration-500 transition-all gap-8 bg-white text-black py-6 px-10">
             {sublinks.map(({name,link})=>(
                <p key={name} className=" hover:text-orange-600">{name}</p>
             ))}
            </div>
          )}
        </li>
      ))}
    </menu>
  );
};
export default MobileMenu;
