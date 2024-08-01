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
                { title: "Posts", show: true, icon: <GrArticle />, id: 10,navtext:'admin/posts' },
                { title: "Services", show: true, icon: <PiSquaresFourDuotone />, id: 11,navtext:'admin/services' },
                { title: "Users", show: true, icon: <PiUsers   />, id: 12,navtext:'admin/users' },
                { title: "Company", show: true, icon: <PiUsers   />, id: 13,navtext:'admin/companies' },
                { title: "Users", show: true, icon: <PiUsers   />, id: 14,navtext:'admin/users' },
                { title: "text", show: true, icon: <PiUsers   />, id: 14,navtext:'admin/text' },
            ]
        },
    ]
    return (
        <>

            <>
                {/* App bar */}
                <AppbarAdmin userSubmenu={userSubmenu}
                userSubmenuMobile={userSubmenuMobile}
                    // handleUserSubmenu={handleUserSubmenu}
                    handleUserSubmenuMobile={handleUserSubmenuMobile} />

                {/* side bar */}
                <SidebarAdmin filteredMenu={menu}
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