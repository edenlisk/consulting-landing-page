import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const HomePage=()=>{

    return(
        <>
        {/* HEADER */}
        <section className=" w-full h-fit bg-red-400  px-6 py-4 lg:px-24 lg:grid flex lg:grid-cols-12 items-center justify-between">
            <p className=" text-2xl bg-lime-200 col-start-1 col-end-3">Bite mwaa</p>
            <GiHamburgerMenu className=" lg:hidden" />
            <ul className="hidden col-start-5 col-end-13 lg:grid lg:grid-cols-3 lg:gap-3 items-center justify-between">
                <li className=" bg-lime-300 p-3"></li>
                <li className=" bg-lime-300 p-3"></li>
                <li className=" bg-lime-300 p-3"></li>
            </ul>
        </section>
        {/* DESKTOP ONLY HEADER */}
        <menu className=" w-full h-fit bg-red-600 px-6 py-4 lg:px-24 flex items-center justify-between">
           <li>menu 1</li>
           <li>menu 2</li>
           <li>menu 3</li>
        </menu>
{/* 1ST SECTION */}
        <section className=" w-full h-[600px] bg-[url('./src/images/office.jpg')] bg-cover bg-center flex items-center">
        <div className="w-full h-fit px-4 lg:px-24">
            <div className="flex bg-orange-200 p-8"></div>
            <div className=" bg-orange-400 p-8"></div>
            <div className=" bg-orange-600 p-8"></div>
            <div className="flex bg-orange-800 p-8"></div>
        </div>
        </section>
{/* 2ND SECTION */}
        <section className=" w-full h-fit px-6 py-12 md:px-24 md:py-24 md:flex gap-3 items-center justify-center">
        <div className="w-full h-[300px] bg-orange-300 relative">
            {/* TO ADD IMAGE CONTAINER TO BE USED AS IF IT WAS A BACKGROUND */}
            <span className="py-7 px-14 bg-red-400 absolute -top-6 right-8 rounded"></span>
            <span className="py-14 px-11 bg-red-600 absolute top-32 -left-8 rounded"></span>
            <span className="py-7 px-20 bg-red-800 absolute -bottom-6 right-24 rounded"></span>
        </div>
        <div className="w-full h-[300px] bg-orange-500"></div>
        </section>
{/* 3RD SECTION */}
        <section className=" w-full h-fit px-6 py-12 md:px-24 md:py-24 space-y-6 bg-slate-200">
            <h2 className="m-0 text-4xl">Our services</h2>
            <div className="border w-[70px] p-1 rounded bg-red-600"></div>
        <li className="w-full h-fit grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ul className="w-full h-[250px] space-y-2 bg-white"></ul>
            <ul className="w-full h-[250px] space-y-2 bg-white"></ul>
            <ul className="w-full h-[250px] space-y-2 bg-white"></ul>
        </li>
        </section>
        {/* 4TH SECTION */}
        <section className="  w-full h-fit px-6 py-12 md:px-24 md:py-40 md:grid md:grid-cols-2 gap-3 items-center justify-center relative">
        <div className="w-full h-[513px] bg-orange-300 space-y-1 flex flex-col items-start"></div>
        <div className="w-full h-[513px] bg-orange-500 "></div>
        <div className=" w-2/4 h-fit bg-transparent grid grid-cols-2 gap-8 items-center justify-start absolute bottom-12 left-28">
        <div className="w-full h-[200px] rounded bg-orange-700"></div>
        <div className="w-full h-[200px] rounded bg-orange-900"></div>
        </div>
        </section>
        {/* 5TH PAGE CONTACTS */}
        <section className="  w-full h-fit px-6 py-12 md:px-24 md:py-24 space-y-6 bg-slate-200">
        <h2 className="m-0 text-4xl">Our team</h2>
            <div className="border w-[70px] p-1 rounded bg-red-600"></div>
        <li className="w-full h-fit grid grid-cols-1 gap-6 md:grid-cols-2">
            <ul className="w-full h-[250px] space-y-2 bg-white"></ul>
            <ul className="w-full h-[250px] space-y-2 bg-white"></ul>
            
        </li>
        </section>
        {/* 6TH PAGE CONTACTS */}
        <section className="  w-full h-fit px-6 py-12 md:px-24 md:py-24 md:grid md:grid-cols-2 gap-3 items-center justify-center bg-[url('./src/images/buildings.jpg')] bg-cover bg-center">
        <div className="w-full h-[400px] bg-orange-300 space-y-1 flex flex-col items-start"></div>
        <div className="w-full h-[400px] bg-orange-500 "></div>
        </section>
        </>
    )
};
export default HomePage;