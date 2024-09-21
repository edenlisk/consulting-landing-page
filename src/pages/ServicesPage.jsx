
import React, {useEffect, useState} from 'react';
import {message, Modal, Button} from 'antd';
import {FaRegFilePdf} from "react-icons/fa6";
import {IoCall} from "react-icons/io5";
import {servicesArray} from "../components/ArraysObj";
import {ServiceCard, SidenavCard} from "../components/Card";
import {Link, useLocation} from "react-router-dom";
import {aboutNavs} from "../components/NavbarList";
import {useQuery} from "@apollo/client";
import {GET_SERVICES} from "../api/graphql.js";
import { CgSpinner } from "react-icons/cg";
import { BiSolidQuoteLeft } from "react-icons/bi";
import {useServices} from "../api/hooks.js";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";


const Services = () => {
    const {services, servicesLoading, servicesError} = useServices();
    // const {data, loading, error} = useQuery(GET_SERVICES);
    // const [services, setServices] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({title: '', description: '', image: ''});
    //
    // useEffect(() => {
    //     if (data) {
    //         console.log('services:', data);
    //         setServices(data.services);
    //     } else if (error) {
    //         return message.error(error.message);
    //     }
    // }, [data, error]);

    useEffect(() => {
        if (servicesError) return message.error(servicesError.message);
    }, [servicesError]);

    const path = useLocation();

    const showModal = (service) => {
        setModalContent(service);
        setModalVisible(true);
    };

    const handleOk = () => {
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    return (
        <section className="grid w-full grid-cols-1 gap-2 p-6 lg:grid-cols-12 lg:px-32">
            {/* FIRST GRID */}
            <p className="pb-1 text-5xl font-bold col-span-full">Services</p>
            <ul className="grid grid-cols-1 gap-4 lg:col-span-9 gap-y-10 md:grid-cols-12">
              { servicesLoading? (<div className='flex items-center justify-center space-y-4 col-span-full'>
                <CgSpinner className='w-32 h-32 animate-spin text-blue-950' />
                            </div>):<>
                
                {
                    services.length && services.map(({attributes}, index) => {
                        return (
                            <ServiceCard key={index}
                                         title={attributes.title}
                                         img={attributes.image?.data?.attributes?.url}
                                         description={attributes.description}
                                         handleModal={() => showModal({
                                             title:attributes.title,
                                             description: attributes.description,
                                             image: attributes.image?.data?.attributes?.url
                                         })}
                            />
                            
                        )
                    })
                }
                </>}
            </ul>
            {/* SECOND GRID */}
            <div className="flex-col hidden gap-10 lg:col-span-3 md:flex">
                {/*<ul className="grid grid-cols-1 gap-[1px]">*/}
                {/*    {aboutNavs.map(({id, title, link}) => (*/}
                {/*        <SidenavCard key={id} title={title} link={link}/>*/}
                {/*    ))}*/}
                {/*</ul>*/}

                <div className="flex items-center gap-2 p-4 text-white bg-orange-400 rounded-md hover:bg-blue-950">
                    <FaRegFilePdf/>
                    <p>Company presentation</p>
                </div>

                <div className="flex flex-col gap-3 p-4 text-white bg-blue-950">
                    <p className="font-bold">How can we help you?</p>
                    <p>
                        Please feel free to contact us for any inquiries or questions you may have.
                    </p>
                    <button
                        className="flex items-center gap-2 p-2 text-black bg-white rounded-sm w-fit hover:text-white hover:bg-orange-500">
                        <IoCall/>
                        <Link to={'/contact-us'}>Contacts</Link>
                    </button>
                </div>
                <div className="relative p-4 border-2 border-zinc-300 testimonial">
                    <p className='p-4 align-top'>Rani Mining Company really helped us achieve our financial goals. The slick presentation along with
                        fantastic readability ensures that our financial standing is stable.</p>
                        <BiSolidQuoteLeft className='absolute right-0 w-16 h-16 text-orange-600 -bottom-2' />
                </div>
            </div>

            <Modal
                title={modalContent.title}
                open={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <img src={modalContent.image ? modalContent.image : servicesArray[0].img} alt="Service"
                     className="object-cover w-full h-64 mb-4"/>
                {/*<p>{modalContent.description}</p>*/}
                <BlocksRenderer content={modalContent.description}/>
            </Modal>
        </section>
    );
};

export default Services;
