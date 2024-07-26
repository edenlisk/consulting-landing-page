import React, {useEffect, useState} from "react";
import { FiArrowRight } from "react-icons/fi";
import { BiSolidTimeFive } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import {useQuery} from "@apollo/client";
import {GET_SERVICES} from "../api/graphql.js";
import { cardsArray } from "../components/ArraysObj";
import { NewsCard } from "../components/Card";


const HomePage = () => {
  const { data, loading, error } = useQuery(GET_SERVICES);

  // useEffect(() => {
  //   if (data) console.log('[data]', data);
  // }, []);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isMobileSubMenu, setIsMobileSubMenu] = useState(false);
  return (
    <>
      {/* 1ST SECTION */}
      <section className=" w-full h-[800px] bg-[url('https://moderndiplomacy.eu/wp-content/uploads/2023/12/business-office-1068x712.jpg')] bg-cover bg-center flex items-center text-white font-semibold">
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
        <div className="w-full h-[300px] mb-10 md:h-[400px] lg:h-[300px] bg-[url('https://dbspazio.io/wp-content/uploads/2023/03/img-about.jpg')] bg-cover bg-center font-semibold relative">
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
        <ul className="w-full h-fit grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <li className="w-full h-[250px] flex flex-col gap-3">
            {/* frontend\src\assets\icons\strategy.svg */}
            <object type="image/svg+xml" data="/icons/talk.svg" className="h-16 w-12"></object>
            <a href="" className="text-lg font-semibold">Business Unit Strategy</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in dolore nihil.</p>
            <span className="flex items-center gap-2 font-semibold">
              <p>Learn more</p>
              <FiArrowRight/>
            </span>
          </li>
          <li className="w-full h-[250px] flex flex-col gap-3">
            {/* frontend\src\assets\icons\strategy.svg */}
            <object type="image/svg+xml" data="/icons/strategy.svg" className="h-16 w-12"></object>
            <a href="" className="text-lg font-semibold">Turnaround Consulting</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in dolore nihil.</p>
            <span className="flex items-center gap-2 font-semibold">
              <p>Learn more</p>
              <FiArrowRight/>
            </span>
          </li>
          <li className="w-full h-[250px] flex flex-col gap-3">
            {/* frontend\src\assets\icons\strategy.svg */}
            <object type="image/svg+xml" data="/icons/bonds.svg" className="h-16 w-12"></object>
            <a href="" className="text-lg font-semibold">Bonds & Commodities</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in dolore nihil.</p>
            <span className="flex items-center gap-2 font-semibold">
              <p>Learn more</p>
              <FiArrowRight/>
            </span>
          </li>
        </ul>
      </section>
        {/* 4TH SECTION */}
        <section className="  w-full h-fit px-6 py-12 md:px-28 md:py-40 md:grid md:grid-cols-2 gap-3 items-center justify-center relative">
          <div className="w-full h-[413px] flex flex-col gap-4 items-start">
            <p className="text-4xl font-bold pb-2">Completed cases</p>
            <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
            <p>Bussiness services</p>
            <p className="text-xl font-semibold">
            Increased sales productivity frees selling time and saves millions
            </p>
            <p className="text-md">If you are an excellent company with a bad image or appearance then you may have loyal clients but new clients will be hard to get</p>
            <span className="flex items-center gap-2 font-semibold">
              <p>Read more</p>
              <FiArrowRight/>
            </span>
        </div>
        <div className="w-full h-[413px] bg-cover relative">
          <img src="https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2022/09/slide1-1.jpg" alt="" className="w-full absolute bottom-0 rounded-md " />
        </div>
        <div className=" w-2/4 h-fit bg-transparent grid grid-cols-2 gap-8 items-center justify-start absolute bottom-12 left-28">
          <div className="w-full h-[200px] rounded bg-cover bg-[url('https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2022/09/caseimg1-3.png')] hidden lg:block"></div>
          <div className="w-full h-[200px] rounded bg-cover bg-[url('https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2022/09/caseimg2-3.png')] hidden lg:block"></div>
        </div>
      </section>
      {/* 5TH PAGE CONTACTS */}
      {/*<section className="  w-full h-fit px-6 py-12 md:px-28 md:py-24 space-y-6 bg-slate-200">*/}
      {/*  <h2 className="m-0 text-4xl">Our team</h2>*/}
      {/*  <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>*/}
      {/*  <ul className="w-full h-fit grid grid-cols-1 gap-6 md:grid-cols-2">*/}
      {/*    <li className="w-full h-[250px] space-y-2 bg-white"></li>*/}
      {/*    <li className="w-full h-[250px] space-y-2 bg-white"></li>*/}
      {/*  </ul>*/}
      {/*</section>*/}
      {/* 6TH PAGE CONTACTS */}
      {/*<section className="  w-full h-fit px-6 py-12 md:px-28 md:py-24 md:grid md:grid-cols-2 gap-3 items-center justify-center bg-[url('./src/images/buildings.webp')] bg-cover bg-center">*/}
      {/*  <div className="w-full h-[400px] bg-orange-300 space-y-1 flex flex-col items-start"></div>*/}
      {/*  <div className="w-full h-[400px] bg-orange-500 "></div>*/}
      {/*</section>*/}

      {/* 7TH PAGE CONTACTS */}
      <section className="hidden md:block w-full h-fit px-6 py-12 md:px-28 md:py-24 space-y-6">
        <h2 className="m-0 text-4xl">Latest News</h2>
        <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
        <ul className="w-full h-fit md:grid grid-cols-1 md:grid-cols-12 gap-y-6 ">
          {cardsArray.map(({img,title,date,id})=>{
            return(

              <NewsCard key={id} img={img}
              title={title}
              date={date}

              />
            )
          })}
        </ul>
      </section>

      {/* FOOTER SECTION */}
    </>
  );
};
export default HomePage;
