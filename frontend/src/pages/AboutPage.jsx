import {FaRegFilePdf} from "react-icons/fa6";
import {IoCall} from "react-icons/io5";
import {Link} from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import {achievements} from "../components/ArraysObj";
import {SidenavCard, TimelineCard} from "../components/Card";
import {aboutNavs} from "../components/NavbarList";
import {useQuery} from "@apollo/client";
import {GET_COMPANY_INFO} from "../api/graphql.js";
import {useEffect, useState} from "react";
import {message} from "antd";

const About = () => {
    const { data, error,loading } = useQuery(GET_COMPANY_INFO);
    const [company, setCompany] = useState({
        history: [],
        companyOverview: [],
        ourMission: [],
    })
    useEffect(() => {
        if (data) {
            setCompany(prevState => (
                {...prevState, history: data.company.history,
                    companyOverview: data.company.companyOverview.split('---'),
                    ourMission: data.company.ourMission.split('---')
                }));
        }
        if (error) message.error(error.message);
    }, [data, error]);

    return (
        <section className="grid w-full h-full grid-cols-1 gap-2 p-6 lg:grid-cols-12 lg:px-32">
         {loading?<div className='flex flex-col items-center justify-center h-screen space-y-4 col-span-full'>
                <CgSpinner className='w-32 h-32 animate-spin text-blue-950' />
                <p className="text-lg">Loading...</p>
                            </div>:<>
            {/* FIRST GRID */}
            <div className="flex flex-col gap-4 lg:col-span-9">
                <img
                    src="https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2020/08/slide-2-1.jpg"
                    alt="team standing"
                />

                <div className="w-full">
                    <ul className="py-6 ">

                        {company.history?.map(({ title, year, description}, index) => {
                            return (
                                <TimelineCard key={index}
                                              title={title}
                                              year={year}
                                              description={description}
                                              />
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-4xl font-bold">
                        Company Overview
                    </p>
                    {company.companyOverview && company.companyOverview.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })}
                    {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam autem sunt dolorem*/}
                    {/*    porro sit iure, libero mollitia officiis maxime.</p>*/}
                    {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam autem sunt dolorem*/}
                    {/*    porro sit iure, libero mollitia officiis maxime.</p>*/}
                    <span className="p-6 border-l-4 border-orange-500 bg-slate-200">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nesciunt nam amet possimus, quam, ut tenetur labore corporis ratione repellat repudiandae. Similique.</p>
            </span>
                </div>
                <div className="flex flex-col w-full gap-4 md:flex-row">
                    <div className="space-y-2">
                        <p className="text-lg font-bold">
                            Our mission
                        </p>
                        <p>Our renowned coaching programs will allow you to:</p>
                        <ul className="pl-6 list-disc ">
                            {company.ourMission && company.ourMission.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                            {/*<li>*/}
                            {/*    Work fewer hours — and make more money*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    Attract and retain quality, high-paying customers*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    Manage your time so you’ll get more done in less time*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    Automate your business, so you can leave for days, weeks, or even months at a time*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <p className="text-lg font-bold">
                            How we work
                        </p>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>

            {/* SECOND GRID */}
            <div className="flex-col hidden gap-10 lg:col-span-3 md:flex">
                <ul className="grid grid-cols-1 gap-[1px]">

                    {aboutNavs.map(({id, title, link}) => {
                        return (

                            <SidenavCard key={id}
                                         title={title}
                                         link={link}
                            />
                        )
                    })}
                </ul>

                <div className="flex items-center gap-2 p-4 text-white bg-orange-400 rounded-md hover:bg-blue-950">
                    <FaRegFilePdf/>
                    <p>Company presentation</p>
                </div>

                <div className="flex flex-col gap-3 p-4 text-white bg-blue-950">
                    <p className="font-bold">How can we help you?</p>
                    <p>
                        Please feel free to contact us for any inquiries or questions you may have.
                    </p>
                    <Link to="/contact-us" className="flex items-center gap-2 p-2 text-black bg-white rounded-sm w-fit hover:text-white hover:bg-orange-500">
                        <IoCall/>
                        <p>contacts</p>
                    </Link>
                </div>
            </div>
         </>}
        </section>
    );
};
export default About;
