import React, {useEffect, useState} from "react";
import {FiArrowRight} from "react-icons/fi";
import {FiMail} from "react-icons/fi";
import {LuPhone} from "react-icons/lu";
import {IoLocationOutline} from "react-icons/io5";
import ContactCard from "../components/contactCard.jsx";
import Carousel from "../components/carousel.jsx";
import {BlocksRenderer} from '@strapi/blocks-react-renderer';
import {useCompanyInfo} from "../api/hooks.js";
import {MdEmail} from "react-icons/md";
import {useNavigate} from "react-router-dom";


const HomePage = () => {
    const {rani} = useCompanyInfo()
    const [posts, setPosts] = useState([]);
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
    return (
        <>
            <Carousel homeSubText={rani?.homeSubText} homeMainText={rani?.homeMainText}
                      images={rani?.homeImages?.data?.map(img => img?.attributes?.formats?.large?.url)}/>
            {/* 2ND SECTION */}
            <section
                className="justify-center w-full px-6 py-12 h-fit md:px-28 md:py-24 md:flex md:gap-16 md:items-center">
                <div>
                    {rani?.aboutUsImage?.data?.attributes?.url ? <img src={rani?.aboutUsImage?.data?.attributes?.url} alt=""/> : null}
                </div>
                <div className="md:w-[90%] flex justify-start flex-col gap-4">
                    <h2 className="text-4xl font-semibold">About us</h2>
                    <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
                    <p className="text-xl font-semibold">
                        Above all, we believe that real change is possible and that tomorrow
                        doesn’t have to be like today
                    </p>
                    {rani?.companyOverview && <BlocksRenderer content={rani?.companyOverview.slice(0, 2)}/>}
                    {/*<p className="text-md ">*/}
                    {/*    Solving social problems requires leaders from foundations,*/}
                    {/*    businesses, nonprofits, and governments to reimagine the systems and*/}
                    {/*    relationships that shape our world. We strive for a deep*/}
                    {/*    understanding of how to create social change.*/}
                    {/*</p>*/}
                    <div onClick={() => navigate('/about-us')} className="flex items-center gap-2">
                        <p className="md:text-lg">Read more</p>
                        <FiArrowRight className="text-xl text-orange-500 hover:text-blue-950"/>
                    </div>
                </div>
            </section>
            {/* 3RD SECTION */}
            {/*<section className="w-full px-6 py-12 space-y-6 h-fit md:px-28 md:py-24 bg-slate-200">*/}
            {/*    <h2 className="m-0 text-4xl">Our services</h2>*/}
            {/*    <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>*/}
            {/*    <ul className="grid w-full grid-cols-1 gap-6 h-fit md:grid-cols-2 lg:grid-cols-3">*/}
            {/*        {services && services.map((service, index) => {*/}
            {/*            return (*/}
            {/*                <li key={index} className="w-full h-[250px] flex flex-col gap-3">*/}
            {/*                    /!* frontend\src\assets\icons\strategy.svg *!/*/}
            {/*                    <object type="image/svg+xml" data="/icons/talk.svg" className="w-12 h-16"></object>*/}
            {/*                    <a href="" className="text-lg font-semibold">{service.title}</a>*/}
            {/*                    <p>{`${service.description.slice(0, 60)}...`}</p>*/}
            {/*                    <span className="flex items-center gap-2 font-semibold">*/}
            {/*        <Link to="/services">Learn more</Link>*/}
            {/*        <FiArrowRight/>*/}
            {/*      </span>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </ul>*/}
            {/*</section>*/}

            {/* 4TH SECTION */}
            {/*<section*/}
            {/*    className="relative items-center justify-center w-full gap-3 px-6 py-12 h-fit md:px-28 md:py-40 md:grid md:grid-cols-2">*/}
            {/*    <div className="w-full h-[413px] flex flex-col gap-4 items-start">*/}
            {/*        <p className="pb-2 text-4xl font-bold">Completed cases</p>*/}
            {/*        <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>*/}
            {/*        <p>Bussiness services</p>*/}
            {/*        <p className="text-xl font-semibold">*/}
            {/*            Increased sales productivity frees selling time and saves millions*/}
            {/*        </p>*/}
            {/*        <p className="text-md">If you are an excellent company with a bad image or appearance then you may*/}
            {/*            have loyal clients but new clients will be hard to get</p>*/}
            {/*        <span className="flex items-center gap-2 font-semibold">*/}
            {/*  <p>Read more</p>*/}
            {/*  <FiArrowRight/>*/}
            {/*</span>*/}
            {/*    </div>*/}
            {/*    <div className="w-full h-[413px] bg-cover relative">*/}
            {/*        <img*/}
            {/*            src="https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2022/09/slide1-1.jpg"*/}
            {/*            alt="" className="absolute bottom-0 w-full rounded-md "/>*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*        className="absolute grid items-center justify-start w-2/4 grid-cols-2 gap-8 bg-transparent h-fit bottom-12 left-28">*/}
            {/*        <div*/}
            {/*            className="w-full h-[200px] rounded bg-cover bg-[url('https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2022/09/caseimg1-3.png')] hidden lg:block"></div>*/}
            {/*        <div*/}
            {/*            className="w-full h-[200px] rounded bg-cover bg-[url('https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2022/09/caseimg2-3.png')] hidden lg:block"></div>*/}
            {/*    </div>*/}
            {/*</section>*/}


            {/* 5TH PAGE CONTAC */}
            {/*<section className="w-full px-6 py-12 space-y-6 h-fit md:px-28 md:py-24 bg-slate-200">*/}
            {/*  <h2 className="m-0 text-4xl">Our team</h2>*/}
            {/*  <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>*/}
            {/*  <ul className="grid w-full grid-cols-1 gap-6 h-fit md:grid-cols-2">*/}
            {/*    <li className="w-full h-[250px] space-y-2 bg-white"></li>*/}
            {/*       <li className="w-full h-[250px] space-y-2 bg-white"></li>*/}
            {/*     </ul>*/}
            {/*</section>*/}
            {/* 6TH PAGE CONTACTS  */}
            <section
                className="relative items-center justify-center w-full gap-3 px-6 py-12 bg-center bg-cover h-fit md:px-28 md:py-24 ">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90  bg-[url('./src/images/buildings.webp')]"></div>

                <div className="absolute inset-0 bg-blue-950 opacity-90"></div>
                <div className="grid w-full grid-cols-1 gap-4 text-white md:grid-cols-2">
                    <div className="relative z-10 flex flex-col w-full space-y-5 items-Center">
                        <h2 className="m-0 text-5xl font-semi-bold">More than 25 years of experience</h2>
                        <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
                        <p className="text-lg">3000+ our clients are insured around the World</p>
                    </div>
                    <div className="relative z-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="pl-5 space-y-2 border-l-[3px] hover:border-l-orange-400 ">
                            <p className="text-4xl font-bold">253</p>
                            <p className="text-lg">projects completed</p>
                        </div>
                        <div className="pl-5 space-y-2 border-l-[3px] hover:border-l-orange-400">
                            <p className="text-4xl font-bold">16</p>
                            <p className="text-lg">consultants</p>
                        </div>
                        <div className="pl-5 space-y-2 border-l-[3px] hover:border-l-orange-400">
                            <p className="text-4xl font-bold">11</p>
                            <p className="text-lg">awards winning</p>
                        </div>
                        <div className="pl-5 space-y-2 border-l-[3px] hover:border-l-orange-400">
                            <p className="text-4xl font-bold">372</p>
                            <p className="text-lg">satisfied customers</p>
                        </div>
                    </div>
                </div>
            </section>



            <section
                className="relative items-center justify-center w-full gap-3 px-6 py-12 bg-center bg-cover h-fit md:px-28 md:py-24">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-4  0  bg-[url('./src/images/buildings.webp')]"></div>

                <div className="absolute inset-0 bg-gray-200 opacity-90"></div>
                <div className="grid items-start w-full grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="relative z-50 space-y-3 ">
                        <h2 className="m-0 text-4xl">Latest News</h2>
                        <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
                        <ContactCard icon={<FiMail className='w-5 h-5 text-white'/>} title={'Address'}
                                     description={`${rani?.district}, ${rani?.province}, ${rani?.country}`}/>
                        <ContactCard icon={<LuPhone className='w-5 h-5 text-white'/>} title={'Phone'}
                                     description={rani?.phoneNumber}/>
                        <ContactCard icon={<MdEmail className='w-5 h-5 text-white'/>} title={'Email'}
                                     description={rani?.email}/>

                    </div>
                    <div className="relative z-50 flex flex-col items-start w-full space-y-3 ">
                        <h2 className="m-0 text-4xl">Latest News</h2>
                        <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>

                        <form className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-2">
                            <input type="text" placeholder="Enter first name" name="firstName"
                                   className="w-full p-3 shadow-sm outline-none"/>
                            <input type="phone" placeholder="Phone" name="phone"
                                   className="w-full p-3 shadow-sm outline-none"/>
                            <input type="text" placeholder="First name*" name="senderName"
                                   className="w-full p-3 shadow-sm outline-none"/>
                            <button type="submit" className="p-3 text-white bg-orange-600 rounded-md w-fit">Submit
                            </button>
                        </form>

                    </div>
                </div>
            </section>

        </>
    );
};
export default HomePage;
