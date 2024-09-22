import React, {Fragment, useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {TfiLocationPin} from "react-icons/tfi";
import {FiArrowRight} from "react-icons/fi";
import {BiPhone, BiSolidTimeFive} from "react-icons/bi";
import {FaPlus} from "react-icons/fa6";
import {NavLink, Outlet} from "react-router-dom";
import {Spin as Hamburger} from "hamburger-react";
import MobileMenu from "../components/MobileMenu";
import office from '../images/office.webp'
import {navigations} from "./ArraysObj";
import Footer from "./Footer";
import BreadCrumb from "./BreadCrumb";
import {Avatar} from "antd";
import {CgLock} from "react-icons/cg";
import {BsClock} from "react-icons/bs";
import {useCompanyInfo} from "../api/hooks.js";


const Layout = () => {
    const {rani} = useCompanyInfo();
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [isMobileSubMenu, setIsMobileSubMenu] = useState(false);
    const [isModel, setIsModel] = useState(false);
    const [modalPosition, setModalPosition] = useState({top: 0, left: 0});


    const handleMouseEnter = (event) => {
        const rect = event.target.getBoundingClientRect();
        setModalPosition({top: rect.bottom, left: rect.left});
        setIsModel(true);
    };
    return (
        <div className="w-[100%] h-[100%] p-0 m-0 overflow-hidden">
            {/* HEADER */}
            <header
                className=" w-full bg-cover bg-[url(./images/office.webp)] h-fit px-6 py-4 lg:px-28 lg:grid flex lg:grid-cols-12 items-center justify-between relative">
                <div src={office} alt="" style={{filter: 'blur(3px)'}}
                     className="w-full h-full object-cover bg-black/5 backdrop-blur-sm absolute z-10"></div>
                <h1 className=" text-4xl col-start-1 col-end-3 z-20">
                    <Avatar
                        size={80}
                        src={rani?.logo?.data?.attributes?.formats?.thumbnail?.url}/>
                    {/*<img src="https://ik.imagekit.io/wmhztw3vi/user-profiles/simple-logo_45hN5IEVA-.png" alt="company logo"/>*/}
                </h1>
                <span className="md:hidden z-20">
          <Hamburger
              style={{color: 'white'}}
              className="text-white"
              size={27}
              toggled={isMobileMenu}
              toggle={() => {
                  setIsMobileMenu(!isMobileMenu);
                  setIsMobileSubMenu(false);
              }}
          />
        </span>
                <ul className="hidden col-start-6 col-end-13 px-1 lg:flex items-center justify-between z-20">
                    <li className="flex justify-start items-center gap-1">
                        <TfiLocationPin className="text-2xl text-white font-semibold"/>
                        <p className="text-lg text-white font-semibold">{`${rani?.district}, ${rani?.province}-${rani?.country}`}</p>
                    </li>
                    <li className="flex justify-start items-center gap-1">
                        <BiPhone className="text-2xl text-white font-semibold"/>
                        <p className="text-lg text-white font-semibold">{rani?.phoneNumber}</p>
                    </li>
                    <li className="flex justify-start items-center gap-1">
                        <BsClock className="text-2xl text-white font-semibold"/>
                        <p className="text-lg text-white font-semibold">
                            {rani?.openHours}
                        </p>
                    </li>
                </ul>
            </header>

            <MobileMenu
                isMobileMenu={isMobileMenu}
                setIsMobileMenu={setIsMobileMenu}
            />
            {/* DESKTOP ONLY HEADER */}
            <menu
                className=" w-full h-fit bg-[#03274a] px-6 lg:px-28 hidden md:flex items-center justify-between group overflow-hidden">

                {navigations.map(({id, text, path, submenu}) => {
                    return (
                        <Fragment key={id}>
                            <NavLink
                                onMouseEnter={(event) => handleMouseEnter(event)}
                                onMouseLeave={() => {
                                    setIsModel(false)
                                }}
                                to={path}
                                className={({isActive}) =>
                                    isActive
                                        ? " text-md text-orange-400 font-bold py-2 relative"
                                        : "text-md text-white font-bold py-2 relative"
                                }
                            >
                                {text}
                            </NavLink>

                            {/*    <ul*/}
                            {/*onMouseEnter={()=>setIsModel(true)}*/}
                            {/*onMouseLeave={()=>setIsModel(false)}*/}
                            {/*style={{left: `${modalPosition.left}px`}} className={`w-fit p-2 ${isModel? 'grid':'hidden'} grid-cols-2 h-72 gap-2 shadow-lg bg-white absolute top-28 z-50 `}>*/}
                            {/*  <li className=" border-r-2 px-6">*/}
                            {/*    <p>web dev</p>*/}
                            {/*    <p>app dev</p>*/}
                            {/*  </li>*/}
                            {/*  <li className="px-6">yoola</li>*/}
                            {/*</ul>*/}
                        </Fragment>

                    )

                })}


            </menu>
            <BreadCrumb/>
            <>
                <Outlet/>
                <Footer/>
            </>

        </div>
    );
};
export default Layout;
