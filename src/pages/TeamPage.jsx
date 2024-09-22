import {IoCall, IoAddSharp} from "react-icons/io5";
import {ProfileCard} from "../components/Card";
import React, {useEffect, useState} from "react";
import {message, Modal} from "antd";
import {CgSpinner} from "react-icons/cg";
import {Link} from "react-router-dom";
import {useTeamMembers} from "../api/hooks.js";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";


const Team = () => {
    const {users, usersError, usersLoading} = useTeamMembers();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({name: '', description: '', filePath: ''});

    useEffect(() => {
        if (usersError) return message.error(usersError.message);
    }, [usersError]);

    const showModal = (staff) => {
        setModalContent(staff);
        setModalVisible(true);
    };

    const handleOk = () => {
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    return (
        <section className="grid w-full h-full grid-cols-1 gap-2 p-6 lg:grid-cols-12 lg:px-32">
            {usersLoading ? <div className='flex flex-col items-center justify-center h-screen space-y-4 col-span-full'>
                <CgSpinner className='w-32 h-32 animate-spin text-blue-950'/>
                <p className="text-lg">Loading...</p>
            </div> : <>
                {/* FIRST GRID */}
                <ul className="grid grid-cols-1 gap-4 lg:col-span-9 gap-y-10 md:grid-cols-12">
                    <p className="pb-1 text-5xl font-bold col-span-full">Our Team</p>
                    {
                        users.length ? users.map(({attributes}, index) => {
                            return (
                                <ProfileCard key={index}
                                             name={attributes.fullName}
                                             title={attributes.position}
                                             description={attributes.background?.slice(0, 2)}
                                             img={attributes.profile?.data?.attributes?.formats?.small?.url}
                                             handleModal={() => showModal({
                                                 name: attributes.fullName,
                                                 description: attributes.background,
                                                 filePath: attributes.profile?.data?.attributes?.url
                                             })}
                                />
                            )
                        }) : null
                    }
                </ul>

                {/* SECOND GRID */}
                <div className="flex-col hidden gap-10 lg:col-span-3 md:flex">

                    <div className="flex flex-col gap-3 p-4 text-white bg-blue-950">
                        <p className="font-bold">How can we help you?</p>
                        <p>
                            Please feel free to contact us for any inquiries or questions you may have.
                        </p>
                        <Link to="/contact-us"
                              className="flex items-center gap-2 p-2 text-black bg-white rounded-sm w-fit hover:text-white hover:bg-orange-500">
                            <IoCall/>
                            <p>contacts</p>
                        </Link>
                    </div>
                </div>

                <Modal
                    title={modalContent.name}
                    open={modalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <img src={modalContent.filePath} alt="staff" className="object-cover w-full h-full mb-4"/>
                    {modalContent.description ? <BlocksRenderer content={modalContent.description}/> : null}
                    {/*<p>{modalContent.description}</p>*/}
                </Modal>
            </>}
        </section>
    );
};
export default Team;
