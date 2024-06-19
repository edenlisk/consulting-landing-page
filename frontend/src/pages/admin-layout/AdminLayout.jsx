import React, { useEffect, useState, Fragment } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { PiCaretLeftLight, PiWindowsLogoDuotone, PiHandbagDuotone, PiUserDuotone, PiUsersDuotone,PiUserPlusDuotone, PiEnvelopeLight, PiCubeDuotone, PiShieldDuotone, PiGlobeSimpleLight, PiCaretRightLight, PiUser, PiSquaresFourDuotone, PiDeviceMobileCameraDuotone, PiPlusSquareDuotone, PiCubeTransparentDuotone, PiTagDuotone, PiSpeakerHifiDuotone, PiBarcodeDuotone, PiArrowsInSimpleDuotone, PiShoppingCartSimpleDuotone, PiFilesDuotone, PiFileTextDuotone, PiFloppyDiskDuotone, PiArrowsClockwiseDuotone, PiArrowBendUpLeftDuotone, PiDatabaseDuotone, PiSignInDuotone, PiChartPieDuotone, PiHouseDuotone, PiBrowserDuotone, PiFileMinusDuotone, PiGearDuotone, PiFileDuotone, PiShoppingBagDuotone, PiBellSimpleLight, PiGearLight,PiHandshakeDuotone,PiTruckDuotone,PiFolderSimpleDuotone  } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import { GrArticle } from "react-icons/gr";
import { PiUsers   } from "react-icons/pi";
import { LuBarChart2 } from "react-icons/lu"
import { GiDiamondHard } from "react-icons/gi"
import { PiCurrencyEthDuotone } from "react-icons/pi"
import { TbArrowsCross } from "react-icons/tb"
import {GoFileDirectory} from "react-icons/go";
import SidebarAdmin from "./SidebarAdmin";
import AppbarAdmin from "./AppbarAdmin";

const AdminLayout = () => {
    const [open, setOpen] = useState(false);
    const [userSubmenu, setUserSubmenu] = useState(false);
    const [userSubmenuMobile, setUserSubmenuMobile] = useState(false);
    const navigate = useNavigate();


    // const decideShowMenu = (permissionKey) => {
    //     if (permissions && permissions[permissionKey]) {
    //         Object.keys(permissions[permissionKey]).forEach(key => {
    //             if (permissions[permissionKey][key]) {
    //                 return true;
    //             }
    //         })
    //     }
    // }

    const opennav = () => {
        setOpen(!open)
    }

    const handleUserSubmenu = () => {
        setUserSubmenu(!userSubmenu);
    }
    const handleUserSubmenuMobile = () => {
        setUserSubmenuMobile(!userSubmenuMobile);
    }

    const handleLogOut=async()=>{
        navigate('/login');
    }
    const menu = [
        {
            heading: "Main", hId: 1, subHeaders: [
                { title: "Posts", show: true, icon: <GrArticle />, id: 10,navtext:'posts' },
                { title: "Sevices", show: true, icon: <PiSquaresFourDuotone />, id: 11,navtext:'sevices' },
                { title: "Users", show: true, icon: <PiUsers   />, id: 12,navtext:'users' },
            ]
        },
    ]

    const keyMap = {
        "main": "main",
        "dashboard": "dashboard",
        "entry": "entry",
        "shipments": "shipments",
        "tags": "tags",
        "suppliers": "suppliers",
        "buyers": "buyers",
        "users": "users",
        "contracts": "contracts",
        "payments": "payments",
    }

    // Define the roles and their associated menu item IDs and restricted item IDs
    const roleMenus = {
        admin: {
            allowedSections: [1, 7, 15, 24, 29, 32, 37, 44, 48,79,81, 84, 84,87],
            restrictedItems: {
                7: [11, 12], // For section with hId 7, restrict items 11 and 12
                15: [19, 58], // For section with hId 15, restrict items 19 and 58
                // Add more restricted items for specific sections as needed
            }
        },
        ceo: {
            allowedSections: [1, 2,3,4,5,6,7,8,9,79,81,84, 85,87],
            restrictedItems: {
                15: [19, 58], // For section with hId 15, restrict items 19 and 58
                // Add more restricted items for specific sections as needed
            }
        },
        employee: {
            allowedSections: [1, 7, 15, 24, 32,29, 37, 44, 48,79,81,87],
            restrictedItems: {
                // Define restricted items for employee role if needed
            }
        },
        // Add more roles and associated menu item IDs and restrictions as needed
    };

    // Define the user's role and user ID (change these values as needed)
    const userRole = 'ceo'; // Change this to 'ceo', 'employee', etc.
    const userId = 123; // Change this to the actual user ID

    // Filter the original menu based on the user's role and restrictions
    const filteredMenu = menu.filter(section => roleMenus[userRole].allowedSections.includes(section.hId))
        .map(section => {
            if (section.subHeaders && section.subHeaders.length > 0) {
                const restrictedItems = roleMenus[userRole].restrictedItems[section.hId];
                if (restrictedItems) {
                    section.subHeaders = section.subHeaders.filter(item => !restrictedItems.includes(item.id));
                }
            }
            return section;
        });

    // Output the filtered menu


    return (
        <>

            <>
                {/* App bar */}
                <AppbarAdmin userSubmenu={userSubmenu}
                userSubmenuMobile={userSubmenuMobile}
                    // handleUserSubmenu={handleUserSubmenu}
                    handleUserSubmenuMobile={handleUserSubmenuMobile} />

                {/* side bar */}
                <SidebarAdmin filteredMenu={filteredMenu}
                    opennav={opennav}
                    open={open} 
                    logOut={handleLogOut}/>
                <div className={`content ml-14 -translate-x-0  transform ease-in-out duration-700 pt-20 px-2 h-screen md:px-5 pb-4 ${open && ' ml-[194px]'}`}>
                    <Outlet />
                </div>

            </>



        </>
    )
}
export default AdminLayout;