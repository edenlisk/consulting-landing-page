import React, {useEffect, useState} from "react";
import {FiArrowRight} from "react-icons/fi";
import {useQuery} from "@apollo/client";
import {GET_SERVICES, GET_BLOGS} from "../api/graphql.js";
import {cardsArray} from "../components/ArraysObj";
import {NewsCard} from "../components/Card";
import {message} from "antd";
import {Link} from "react-router-dom";
import dayjs from "dayjs";
import { FiMail } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import ContactCard from "../components/contactCard.jsx";


const HomePage = () => {
    const {data: servicesData, error} = useQuery(GET_SERVICES);
    const {data: postsData, error: postsError} = useQuery(GET_BLOGS);
    const [posts, setPosts] = useState([]);
    const [services, setServices] = useState([]);
    useEffect(() => {
        if (servicesData) {
            setServices(servicesData.services);
        } else if (error) {
            return message.error(error.message);
        }
    }, [servicesData, error]);

    useEffect(() => {
        if (postsData) {
            setPosts(postsData.blogs);
        }
    }, [postsData]);

    // useEffect(() => {
    //   if (data) console.log('[data]', data);
    // }, []);
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [isMobileSubMenu, setIsMobileSubMenu] = useState(false);
    return (
        <>
            {/* 1ST SECTION */}
            <section
                className=" w-full h-[800px] bg-[url('https://moderndiplomacy.eu/wp-content/uploads/2023/12/business-office-1068x712.jpg')] bg-cover bg-center flex items-center text-white font-semibold">
                <div className="w-full px-4 py-24 space-y-6 h-fit lg:px-28">
                    <div className="flex items-center gap-3 py-1">
                        <span className="w-[70px] p-[1.8px] rounded-full bg-red-500"></span>
                        <p className="text-lg">Meet Rani Mining Company</p>
                    </div>
                    <p className="w-full py-1 text-5xl md:text-6xl md:w-3/4">
                        Elevate business operations with Mining Process
                    </p>
                    <p className="py-1 text-lg">
                        We know how to achieve the highest standards most productively
                    </p>
                    <div className="flex items-center gap-6 space-y-4">
                        <button
                            type="button"
                            className="px-6 py-3 text-lg bg-orange-400 rounded-md "
                        >
                            Learn more
                        </button>
                        <div className="flex items-center gap-2">
                            <p className="md:text-lg">All services</p>
                            <FiArrowRight className="text-xl text-orange-500 hover:text-white"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* 2ND SECTION */}
            <section
                className="justify-center w-full px-6 py-12 h-fit md:px-28 md:py-24 md:flex md:gap-16 md:items-center">
                <div
                    className="w-full h-[300px] mb-10 md:h-[400px] lg:h-[300px] bg-[url('https://dbspazio.io/wp-content/uploads/2023/03/img-about.jpg')] bg-cover bg-center font-semibold relative">
                    {/* TO ADD IMAGE CONTAINER TO BE USED AS IF IT WAS A BACKGROUND */}
                    <span
                        className="absolute z-30 flex flex-col items-center gap-2 p-4 bg-white rounded shadow-lg md:flex-row drop-shadow -top-6 right-8">
            <p>Innovation</p>
          </span>
                    <span
                        className="absolute z-30 flex flex-col items-center gap-2 px-2 bg-white rounded shadow md:flex-row py-14 top-24 -left-8">
            <p>Experts</p>
          </span>
                    <span
                        className="absolute z-30 flex flex-col items-center gap-2 p-4 bg-white rounded shadow md:flex-row -bottom-6 right-24">
            <p>Human-focused</p>
          </span>
                    <span
                        className="absolute hidden px-20 py-10 bg-red-800 rounded md:block -bottom-6 -left-4 -z-10"></span>
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
                        <FiArrowRight className="text-xl text-orange-500 hover:text-blue-950"/>
                    </div>
                </div>
            </section>
            {/* 3RD SECTION */}
            <section className="w-full px-6 py-12 space-y-6 h-fit md:px-28 md:py-24 bg-slate-200">
                <h2 className="m-0 text-4xl">Our services</h2>
                <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
                <ul className="grid w-full grid-cols-1 gap-6 h-fit md:grid-cols-2 lg:grid-cols-3">
                    {services && services.map((service, index) => {
                        return (
                            <li key={index} className="w-full h-[250px] flex flex-col gap-3">
                                {/* frontend\src\assets\icons\strategy.svg */}
                                <object type="image/svg+xml" data="/icons/talk.svg" className="w-12 h-16"></object>
                                <a href="" className="text-lg font-semibold">{service.title}</a>
                                <p>{`${service.description.slice(0, 60)}...`}</p>
                                <span className="flex items-center gap-2 font-semibold">
                    <Link to="/services">Learn more</Link>
                    <FiArrowRight/>
                  </span>
                            </li>
                        )
                    })}
                    {/*<li className="w-full h-[250px] flex flex-col gap-3">*/}
                    {/*  /!* frontend\src\assets\icons\strategy.svg *!/*/}
                    {/*  <object type="image/svg+xml" data="/icons/talk.svg" className="w-12 h-16"></object>*/}
                    {/*  <a href="" className="text-lg font-semibold">Business Unit Strategy</a>*/}
                    {/*  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in dolore nihil.</p>*/}
                    {/*  <span className="flex items-center gap-2 font-semibold">*/}
                    {/*    <p>Learn more</p>*/}
                    {/*    <FiArrowRight/>*/}
                    {/*  </span>*/}
                    {/*</li>*/}
                    {/*<li className="w-full h-[250px] flex flex-col gap-3">*/}
                    {/*  /!* frontend\src\assets\icons\strategy.svg *!/*/}
                    {/*  <object type="image/svg+xml" data="/icons/strategy.svg" className="w-12 h-16"></object>*/}
                    {/*  <a href="" className="text-lg font-semibold">Turnaround Mining Industry</a>*/}
                    {/*  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in dolore nihil.</p>*/}
                    {/*  <span className="flex items-center gap-2 font-semibold">*/}
                    {/*    <p>Learn more</p>*/}
                    {/*    <FiArrowRight/>*/}
                    {/*  </span>*/}
                    {/*</li>*/}
                    {/*<li className="w-full h-[250px] flex flex-col gap-3">*/}
                    {/*  /!* frontend\src\assets\icons\strategy.svg *!/*/}
                    {/*  <object type="image/svg+xml" data="/icons/bonds.svg" className="w-12 h-16"></object>*/}
                    {/*  <a href="" className="text-lg font-semibold">Bonds & Commodities</a>*/}
                    {/*  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in dolore nihil.</p>*/}
                    {/*  <span className="flex items-center gap-2 font-semibold">*/}
                    {/*    <p>Learn more</p>*/}
                    {/*    <FiArrowRight/>*/}
                    {/*  </span>*/}
                    {/*</li>*/}
                </ul>
            </section>
            {/* 4TH SECTION */}
            <section
                className="relative items-center justify-center w-full gap-3 px-6 py-12 h-fit md:px-28 md:py-40 md:grid md:grid-cols-2">
                <div className="w-full h-[413px] flex flex-col gap-4 items-start">
                    <p className="pb-2 text-4xl font-bold">Completed cases</p>
                    <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
                    <p>Bussiness services</p>
                    <p className="text-xl font-semibold">
                        Increased sales productivity frees selling time and saves millions
                    </p>
                    <p className="text-md">If you are an excellent company with a bad image or appearance then you may
                        have loyal clients but new clients will be hard to get</p>
                    <span className="flex items-center gap-2 font-semibold">
              <p>Read more</p>
              <FiArrowRight/>
            </span>
                </div>
                <div className="w-full h-[413px] bg-cover relative">
                    <img
                        src="https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2022/09/slide1-1.jpg"
                        alt="" className="absolute bottom-0 w-full rounded-md "/>
                </div>
                <div
                    className="absolute grid items-center justify-start w-2/4 grid-cols-2 gap-8 bg-transparent h-fit bottom-12 left-28">
                    <div
                        className="w-full h-[200px] rounded bg-cover bg-[url('https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2022/09/caseimg1-3.png')] hidden lg:block"></div>
                    <div
                        className="w-full h-[200px] rounded bg-cover bg-[url('https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2022/09/caseimg2-3.png')] hidden lg:block"></div>
                </div>
            </section>
             {/* 5TH PAGE CONTAC */}
            <section className="w-full px-6 py-12 space-y-6 h-fit md:px-28 md:py-24 bg-slate-200">
              <h2 className="m-0 text-4xl">Our team</h2>
              <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
              <ul className="grid w-full grid-cols-1 gap-6 h-fit md:grid-cols-2">
                <li className="w-full h-[250px] space-y-2 bg-white"></li>
                   <li className="w-full h-[250px] space-y-2 bg-white"></li>
                 </ul>
            </section>
             {/* 6TH PAGE CONTACTS  */}
            <section className="relative items-center justify-center w-full gap-3 px-6 py-12 bg-center bg-cover h-fit md:px-28 md:py-24 ">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90  bg-[url('./src/images/buildings.webp')]"></div>

<div className="absolute inset-0 bg-blue-950 opacity-90"></div>
<div className="grid w-full grid-cols-1 gap-4 text-white md:grid-cols-2">
              <div className="relative z-10 flex flex-col w-full space-y-5 items-Center">
              <h2 className="m-0 text-5xl font-semi-bold">More than 25 years of experience</h2>
              <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
              <p>3000+ our clients are insured around the World</p>
              </div>
              <div className="relative z-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                <div className="pl-5 space-y-2 border-l-2 hover:border-l-orange-400 ">
                    <p className="text-4xl font-bold">250</p>
                    <p>projects completed</p>
                </div>
                <div className="pl-5 space-y-2 border-l-2 hover:border-l-orange-400">
                    <p className="text-4xl font-bold">250</p>
                    <p>projects completed</p>
                </div>
                <div className="pl-5 space-y-2 border-l-2 hover:border-l-orange-400">
                    <p className="text-4xl font-bold">250</p>
                    <p>projects completed</p>
                </div>
              </div>
              </div>
            </section>

            {/* 7TH PAGE CONTACTS */}
            <section className="hidden w-full px-6 py-12 space-y-6 md:block h-fit md:px-28 md:py-24">
                <h2 className="m-0 text-4xl">Latest News</h2>
                <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
                <ul className="w-full grid-cols-1 h-fit md:grid md:grid-cols-12 gap-y-6 ">
                    {posts && posts.map(({image, title, createdAt, id}) => {
                        return (
                            <NewsCard key={id}
                                      img={image.filePath}
                                      title={title}
                                      link={`/news/${id}`}
                                      date={dayjs(createdAt).format('DD MMM YYYY')}
                            />
                        )
                    })}
                </ul>
            </section>

            {/* 8TH PAGE CONTACTS */}

            <section className="relative items-center justify-center w-full gap-3 px-6 py-12 bg-center bg-cover h-fit md:px-28 md:py-24">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-4  0  bg-[url('./src/images/buildings.webp')]"></div>

<div className="absolute inset-0 bg-gray-200 opacity-90"></div>
<div className="grid items-start w-full grid-cols-1 gap-12 md:grid-cols-2">
              <div className="relative z-50 space-y-3 ">
              <h2 className="m-0 text-4xl">Latest News</h2>
              <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>
              <ContactCard icon={<FiMail className='w-5 h-5 text-white'/>} title={'Address'} description={'5010 Avenue of the Moon, New York, NY 10018 US'}/>
              <ContactCard icon={<LuPhone className='w-5 h-5 text-white'/>} title={'Phone'} description={'212 386 5575'}/>
              <ContactCard icon={<IoLocationOutline className='w-5 h-5 text-white'/>} title={'Email'} description={'info@consultingwp.com'}/>

              </div>
              <div className="relative z-50 flex flex-col items-start w-full space-y-3 ">
              <h2 className="m-0 text-4xl">Latest News</h2>
              <div className="w-[90px] p-[1.8px] rounded-full bg-red-500"></div>

              <form className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-2">
              <input type="text" placeholder="First name*" name="senderName"
                           className="w-full p-3 shadow-sm"/>
              <input type="text" placeholder="First name*" name="senderName"
                           className="w-full p-3 shadow-sm"/>
              <input type="text" placeholder="First name*" name="senderName"
                           className="w-full p-3 shadow-sm"/>
                           <button type="submit" className="p-3 text-white rounded-md w-fit bg-blue-950">Submit</button>
              </form>
              
              </div>
              </div>
            </section>

        </>
    );
};
export default HomePage;
