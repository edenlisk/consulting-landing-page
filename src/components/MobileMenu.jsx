import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { menuLinks } from "./NavbarList";

const MobileMenu = ({ isMobileMenu, setIsMobileMenu }) => {
  const [isMobileSubMenu, setIsMobileSubMenu] = useState(false);
  const [heading, setIHeading] = useState("");

  return (
      <menu
          className={`w-full h-full md:hidden flex flex-col absolute bg-gray-900 duration-500 items-start gap-10 py-8 overflow-x-auto z-50 ${
              isMobileMenu ? 'left-0 top-18' : '-left-full'
          }`}
      >
        {/* MOBILE MENU */}
        {menuLinks.map(({text, path, id}) => (
            <li
                key={id}
                className="w-full flex flex-col gap-4 text-md font-bold text-white"
            >
              <div className="flex justify-between items-center w-full px-8 uppercase">
                <NavLink
                    to={`${path}`}
                    onClick={() => setIsMobileMenu(!isMobileMenu)}
                    className={({isActive}) =>
                        isActive ? 'text-orange-300 ' : ' '
                    }
                >
                  {text}
                </NavLink>
              </div>
            </li>
        ))}
      </menu>
  );
};
export default MobileMenu;
