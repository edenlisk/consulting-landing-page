import {FaRegFilePdf} from "react-icons/fa6";
import {IoCall, IoAddSharp} from "react-icons/io5";
import {ProfileCard} from "../components/Card";
import {useQuery} from "@apollo/client";
import {GET_USERS} from "../api/graphql.js";
import React, {useEffect, useState} from "react";
import {message, Modal} from "antd";
import { CgSpinner } from "react-icons/cg";
import {servicesArray} from "../components/ArraysObj.jsx";
import {Link} from "react-router-dom";


const Team = () => {
    const {data, error,loading} = useQuery(GET_USERS);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState({name: '', description: '', filePath: ''});
    const [teamProfiles, setTeamProfiles] = useState([]);
    useEffect(() => {
        if (data) {
            setTeamProfiles(data.team);
        }
        if (error) return message.error(error.message);
    }, [data, error]);

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
         {loading? <div className='flex flex-col items-center justify-center h-screen space-y-4 col-span-full'>
                <CgSpinner className='w-32 h-32 animate-spin text-blue-950' />
                <p className="text-lg">Loading...</p>
                            </div>:<>
            {/* FIRST GRID */}
            <ul className="grid grid-cols-1 gap-4 lg:col-span-9 gap-y-10 md:grid-cols-12">
                <p className="pb-1 text-5xl font-bold col-span-full">Our Team</p>
                {
                    teamProfiles.map(({id, name, position, background, profile}) => {
                        return (
                            <ProfileCard key={id}
                                         name={name}
                                         title={position}
                                         description={`${background.slice(0, 100)}...`}
                                         img={profile?.filePath || ''}
                                         handleModal={() => showModal({name, description: background, filePath: profile?.filePath })}
                            />
                        )
                    })
                }
            </ul>

            {/* SECOND GRID */}
            <div className="flex-col hidden gap-10 lg:col-span-3 md:flex">
                <ul className="grid grid-cols-1 gap-[1px]">
                    <li className="p-4 border-orange-500 hover:border-l-2 bg-zinc-200">
                        <a href="">Company overview</a>
                    </li>
                    <li className="p-4 border-orange-500 hover:border-l-2 bg-zinc-200">
                        <a href="">Company overview</a>
                    </li>
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
                <img src={modalContent.filePath} alt="staff" className="object-cover w-full h-64 mb-4"/>
                <p>{modalContent.description}</p>
            </Modal>
          </>}
        </section>
    );
};
export default Team;
