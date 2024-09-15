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
import {useCompanyHistory, useCompanyInfo} from "../api/hooks.js";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


const About = () => {
    const { history, historyError, historyLoading } = useCompanyHistory();
    const {rani, raniError, raniLoading} = useCompanyInfo();
    useEffect(() => {
        if (historyError) return message.error(historyError.message);
        if (raniError) return message.error(raniError.message);
    }, [raniError, historyError]);
    // const { data, error,loading } = useQuery(GET_COMPANY_INFO);
    // const [company, setCompany] = useState({
    //     history: [],
    //     companyOverview: [],
    //     ourMission: [],
    // })

    // useEffect(() => {
    //     if (history) console.log(history)
    // }, [history]);

    // useEffect(() => {
    //     if (data) {
    //         setCompany(prevState => (
    //             {...prevState, history: data.company.history,
    //                 companyOverview: data.company.companyOverview.split('---'),
    //                 ourMission: data.company.ourMission.split('---')
    //             }));
    //     }
    //     if (error) message.error(error.message);
    // }, [data, error]);

    return (
        <section className="grid w-full h-full grid-cols-1 gap-2 p-6 lg:grid-cols-12 lg:px-32">
         {raniLoading || historyLoading ?<div className='flex flex-col items-center justify-center h-screen space-y-4 col-span-full'>
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

                        {history.length && history?.map(({attributes}, index) => {
                            return (
                                <TimelineCard key={index}
                                              title={attributes.title}
                                              year={attributes.year}
                                              // description={attributes.description}
                                              />
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-4xl font-bold">
                        Company Overview
                    </p>
                    <BlocksRenderer content={rani.companyOverview}/>
                    {/*{company.companyOverview && company.companyOverview.map((item, index) => {*/}
                    {/*    return <p key={index}>{item}</p>*/}
                    {/*})}*/}
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
                        <BlocksRenderer content={rani.ourMission}/>
                        <ul className="pl-6 list-disc ">
                            {/*{rani.ourMission && rani.ourMission.map((item, index) => {*/}
                            {/*    return <li key={index}>{item}</li>*/}
                            {/*})}*/}
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
