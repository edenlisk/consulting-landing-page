import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const HomePage=()=>{

    return(
        <>
        <section className=" w-full h-fit bg-red-400 p-3 flex justify-between items-center">
            <p className=" text-2xl">Bite mwaa</p>
            <GiHamburgerMenu />
        </section>
        <section className=" w-full h-[600px] bg-[url('./src/images/office.jpg')] bg-cover bg-center flex items-center">
        <div className="w-full h-fit px-4 lg:px-24">
            <div className="flex bg-orange-200 p-8"></div>
            <div className=" bg-orange-400 p-8"></div>
            <div className=" bg-orange-600 p-8"></div>
            <div className="flex bg-orange-800 p-8"></div>
        </div>
        </section>
        </>
    )
};
export default HomePage;