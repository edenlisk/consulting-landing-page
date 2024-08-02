// import {FaRegFilePdf} from "react-icons/fa6";
// import {IoCall, IoAddSharp} from "react-icons/io5";
// import {servicesArray} from "../components/ArraysObj";
// import {ServiceCard, SidenavCard} from "../components/Card";
// import {Link, useLocation} from "react-router-dom";
// import {aboutNavs} from "../components/NavbarList";
// import {useQuery} from "@apollo/client";
// import {GET_SERVICES} from "../api/graphql.js";
// import {useEffect, useState} from "react";
// import {message} from "antd";
//
//
// const Services = () => {
//     const {data, loading, error} = useQuery(GET_SERVICES);
//     const [services, setServices] = useState([]);
//     useEffect(() => {
//         if (data) {
//             console.log('services:', data);
//             setServices(data.services);
//         } else if (error) {
//             return message.error(error.message);
//         }
//     }, [data, error]);
//     const path = useLocation()
//
//     return (
//         <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-2 p-6 lg:px-32">
//             {/* FIRST GRID */}
//             <ul className=" lg:col-span-9 grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-12 ">
//                 <p className="col-span-full pb-1 text-5xl font-bold">Services</p>
//                 {
//                     services && services.map(({image, title, description}, index) => {
//                         return (
//                             <ServiceCard key={index}
//                                          title={title}
//                                          img={image ? image.filePath : servicesArray[0].img}
//                                          description={description}
//                             />
//                         )
//                     })
//                 }
//             </ul>
//
//             {/* SECOND GRID */}
//             <div className="lg:col-span-3 hidden flex-col gap-10  md:flex">
//                 <ul className="grid grid-cols-1 gap-[1px]">
//                     {aboutNavs.map(({id, title, link}) => {
//                         return (
//
//                             <SidenavCard key={id}
//                                          title={title}
//                                          link={link}
//                             />
//                         )
//                     })}
//                 </ul>
//
//                 <div className=" rounded-md p-4 flex items-center gap-2 bg-orange-400 text-white hover:bg-blue-950">
//                     <FaRegFilePdf/>
//                     <p>Company presentation</p>
//                 </div>
//
//                 <div className="p-4 bg-blue-950 text-white flex flex-col gap-3">
//                     <p className="font-bold">How can we help you?</p>
//                     <p>
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eum
//                         qui et.
//                     </p>
//                     <button
//                         className="p-2 bg-white flex items-center gap-2 w-fit rounded-sm text-black hover:text-white hover:bg-orange-500">
//                         <IoCall/>
//                         <Link to={'/contact-us'}>Contacts</Link>
//                     </button>
//                 </div>
//                 <div className="border-4 border-zinc-500 p-4 testimonial">
//                     <p>XYZ Company really helped us achieve our financial goals. The slick presentation along with
//                         fantastic readability ensures that our financial standing is stable.</p>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default Services;


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

const Services = () => {
    const {data, loading, error} = useQuery(GET_SERVICES);
    const [services, setServices] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({title: '', description: '', image: ''});

    useEffect(() => {
        if (data) {
            console.log('services:', data);
            setServices(data.services);
        } else if (error) {
            return message.error(error.message);
        }
    }, [data, error]);

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
        <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-2 p-6 lg:px-32">
            {/* FIRST GRID */}

            <ul className=" lg:col-span-9 grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-12 ">
                <p className="col-span-full pb-1 text-5xl font-bold">Services</p>
                {
                    services && services.map(({image, title, description}, index) => {
                        return (
                            <ServiceCard key={index}
                                         title={title}
                                         img={image ? image.filePath : servicesArray[0].img}
                                         description={`${description.slice(0, 100)}...`}
                                         handleModal={() => showModal({title, description, image})}
                            />
                        )
                    })
                }
            </ul>


            {/* SECOND GRID */}
            <div className="lg:col-span-3 hidden flex-col gap-10 md:flex">
                <ul className="grid grid-cols-1 gap-[1px]">
                    {aboutNavs.map(({id, title, link}) => (
                        <SidenavCard key={id} title={title} link={link}/>
                    ))}
                </ul>

                <div className="rounded-md p-4 flex items-center gap-2 bg-orange-400 text-white hover:bg-blue-950">
                    <FaRegFilePdf/>
                    <p>Company presentation</p>
                </div>

                <div className="p-4 bg-blue-950 text-white flex flex-col gap-3">
                    <p className="font-bold">How can we help you?</p>
                    <p>
                        Please feel free to contact us for any inquiries or questions you may have.
                    </p>
                    <button
                        className="p-2 bg-white flex items-center gap-2 w-fit rounded-sm text-black hover:text-white hover:bg-orange-500">
                        <IoCall/>
                        <Link to={'/contact-us'}>Contacts</Link>
                    </button>
                </div>
                <div className="border-4 border-zinc-500 p-4 testimonial">
                    <p>Rani Mining Company really helped us achieve our financial goals. The slick presentation along with
                        fantastic readability ensures that our financial standing is stable.</p>
                </div>
            </div>

            <Modal
                title={modalContent.title}
                open={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <img src={modalContent.image ? modalContent.image.filePath : servicesArray[0].img} alt="Service"
                     className="w-full h-64 object-cover mb-4"/>
                <p>{modalContent.description}</p>
            </Modal>
        </section>
    );
};

export default Services;
