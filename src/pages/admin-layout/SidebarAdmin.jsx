import React, { useEffect, useState, Fragment } from "react";
import { Button, Tooltip, ConfigProvider } from 'antd';
import { useLocation, useNavigate } from "react-router-dom";
import { PiCaretRightLight,PiSignInDuotone} from "react-icons/pi";

const SidebarAdmin = ({filteredMenu, opennav, open, logOut}) => {
    const [openSubmenu, setOpenSubmenu] = useState(false);
    const [userSubmenu, setUserSubmenu] = useState(false);
    const [active, setActive] = useState("");
    const [choseNav, setChoseNav] = useState("");
    const navigate = useNavigate();
    const {pathname} = useLocation();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    const handleUserSubmenu = () => {
        setUserSubmenu(!userSubmenu);
    }

    return (
        <aside
            className={`w-48 -translate-x-[138px] fixed transition transform ease-in-out duration-700 z-50 flex h-full bg-white ${open && ' w-48 -translate-x-[1px] '} `}>

            <div
                className={`max-toolbar w-full -right-0 transition transform ease-in duration-700 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-custom_blue-300 absolute top-2 rounded-full h-12 ${!open && 'scale-x-0'}`}>


                <div
                    className={`flex items-center space-x-3 group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-custom_blue-400 via-custom_blue-600 to-custom_blue-900  pl-10 pr-2 py-1 rounded-full text-white ${!open && 'text-black'} `}>
                    <div className="transform ease-in-out duration-300 mr-3">
                        RANI MINING
                    </div>
                </div>
            </div>
            <div onClick={opennav}
                 className={`-right-0 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] dark:hover:bg-blue-500 hover:bg-custom_blue-500 absolute top-2 p-1 rounded-full text-white hover:rotate-45 ${!open && 'text-black'}`}>
                {/* <PiWindowsLogoDuotone className={`${!open && 'text-black'}`} /> */}
                <img src="https://icon-library.com/images/mining-icon/mining-icon-1.jpg" alt="logo-image"
                     className="w-8 h-8"/>
            </div>
            {/* big sidebar menu */}
            <div className={`max mt-16 flex-col border-t-[1px]  w-full  list-none overflow-y-scroll ${!open && 'hidden'}`}>
                <ul className="m-0 p-0 flex flex-col gap-1">
                    {filteredMenu.map(({
                                           title,
                                           icon,
                                           line,
                                           submenu,
                                           submenuItems,
                                           show,
                                           subHeaders,
                                           heading,
                                           id,
                                           hId
                                       }, index) => {
                        if (show !== undefined && !show) return null;
                        return (
                            <Fragment key={hId}>
                                <p key={hId} className="px-4 pb-1">{heading}</p>
                                {subHeaders.map(({title, icon, submenu, submenuItems, line, id, navtext, show}, index) => {
                                    // const navtext = title.toLowerCase().replace(/\s/g, '');
                                    if (show !== undefined && !show) return null;
                                    return (
                                        <Fragment key={index}>
                                            {!submenu && (<li key={id}
                                                              className={`no-select flex flex-row items-center p-2 pl-6 space-x-3  hover:text-shark-900 hover:shadow-lg hover:bg-custom_blue-50 h-full w-full text-black transform ease-in-out duration-300  ${line && ' border-b mb-2'} ${active === navtext && ' bg-custom_blue-200 text-custom_blue-700 rounded'}`}
                                                              onClick={() => {
                                                                  navigate(`/${navtext}`);
                                                                  setActive(navtext)
                                                              }}
                                            >
                                                <span className="w-4 h-4 ">{icon}</span>
                                                <p className="">{title}</p>
                                                {submenu && <PiCaretRightLight
                                                    className={`text-xs duration-500 ${openSubmenu && 'rotate-90'}`}
                                                    onClick={() => {
                                                        setOpenSubmenu(!openSubmenu);
                                                        setChoseNav(id)
                                                    }}/>}
                                            </li>)}

                                            {submenu && (
                                                <li key={id}
                                                    className={` w-full text-black transform ease-in-out duration-300   border-b mb-2`}
                                                    onClick={() => {
                                                        setActive(navtext)
                                                    }}
                                                    // ${active === navtext && ' bg-amber-100 text-amber-500 rounded'}
                                                >
                                                    <div
                                                        className=" no-select flex flex-row items-center p-2 pl-6 gap-3 justify-start hover:text-shark-900 hover:shadow-lg hover:bg-custom_blue-50 h-full w-full"
                                                        onClick={() => {
                                                            setOpenSubmenu(!openSubmenu);
                                                            setChoseNav(id)
                                                        }}>
                                                        <span className="w-4 h-4 ">{icon}</span>
                                                        <p className="no-select">{title}</p>
                                                        {submenu && <PiCaretRightLight
                                                            className={`text-xs duration-500 no-select ${openSubmenu && id === choseNav && 'rotate-90'}`}/>}
                                                    </div>
                                                    {submenu && id === choseNav && (
                                                        <ul className={` pl-12 space-y-4 list-disc pb-2 ${openSubmenu ? 'block' : 'hidden'}`}>
                                                            {submenuItems.map(({ id, title,navtext }) => {
                                                                // const navtext = title.toLowerCase().replace(/\s/g, '')
                                                                return (
                                                                    <li key={id} className="hover:text-custom_blue-500 no-select"
                                                                        onClick={() => {
                                                                            navigate(`/${navtext}`)
                                                                        }}
                                                                    >
                                                                        {title}
                                                                    </li>
                                                                )

                                                            })}
                                                        </ul>
                                                    )}

                                                </li>
                                            )}

                                        </Fragment>
                                    )
                                })}

                            </Fragment>
                        )
                    })}
                    {/* ${line && ' border-b mb-2'} ${active === navtext && ' bg-amber-100 text-amber-500 rounded'} */}
                    <li className={`flex flex-row items-center p-2 pl-6 space-x-3  hover:text-amber-500 hover:bg-amber-50 h-full w-full text-black transform ease-in-out duration-300 `}
                        onClick={logOut}
                    >
                        <span className="w-4 h-4 "><PiSignInDuotone/></span>
                        <p className="no-select">Logout</p>
                        {/* {submenu && <PiCaretRightLight className={`text-xs duration-500 ${openSubmenu && 'rotate-90'}`} onClick={() => {
                                                    setOpenSubmenu(!openSubmenu);
                                                    setChoseNav(id)
                                                }} />} */}
                    </li>

                </ul>
            </div>
            {/* small sidebar menu */}
            <ul className={`mini mt-16 border-t-[1px] overflow-y-scroll overflow-x-hidden grid space-y-2 w-full list-none ${open && 'hidden'}`}
                //  onMouseEnter={opennav}
            >
                {filteredMenu.map(({subHeaders}, index) => {
                    return (
                        <Fragment key={index}>
                            {subHeaders.map(({icon, title}, index) => {
                                const navtext = title.toLowerCase().replace(/\s/g, '');
                                return (
                                    <Fragment key={index}>

                                        <li key={index} className={`hover:ml-4 justify-end pr-5 text-black hover:text-custom_blue-500 hover:bg-custom_blue-100 hover:shadow-md w-full p-3 rounded transform ease-in-out duration-300 flex
                ${active === navtext && ' bg-custom_blue-200 text-custom_blue-700 rounded'}
                `} 
                                        >
                                            <span className="w-4 h-4 " onClick={opennav}>{icon}</span>
                                        </li>

                                        {/* <Tooltip title={title} placement="rightTop" color={"#fff"}
                                                 overlayInnerStyle={{color: "black"}} trigger={["hover"]}>
                                            <li key={index} className={`hover:ml-4 justify-end pr-5 text-black hover:text-custom_blue-500 hover:bg-custom_blue-100 hover:shadow-md w-full p-3 rounded transform ease-in-out duration-300 flex
                ${active === navtext && ' bg-custom_blue-200 text-custom_blue-700 rounded'}
                `}
                                            >
                                                <span className="w-4 h-4 " onClick={opennav}>{icon}</span>
                                            </li>
                                        </Tooltip> */}
                                    </Fragment>
                                )
                            })}
                        </Fragment>)
                })}
                <li className={`hover:ml-4 justify-end pr-5 hover:text-custom_blue-500 hover:bg-custom_blue-100 hover:shadow-md w-full p-3 rounded transform ease-in-out duration-300 flex`}
                >
                    <span className="w-4 h-4 "><PiSignInDuotone/></span>
                </li>
            </ul>
        </aside>
    )
}
export default SidebarAdmin;