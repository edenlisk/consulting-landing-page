import {GoChevronRight} from "react-icons/go";
import {IoLocationSharp} from "react-icons/io5";
import {IoLogoGoogleplus} from "react-icons/io";
import {FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import {GrFacebookOption, GrTwitter, GrLinkedinOption, GrSkype} from "react-icons/gr";
import {useEffect, useState} from "react";
import {useMutation} from "@apollo/client";
import {SEND_MESSAGE} from "../api/graphql.js";
import {message} from "antd";

const Contacts = () => {
    const [sendMessage, {loading, error}] = useMutation(SEND_MESSAGE)

    const [messageDetails, setMessageDetails] = useState(
        {
            senderEmail: '',
            senderName: '',
            senderPhoneNumber: '',
            textMessage: ''
        }
    )

    useEffect(() => {
        if (error) {
            return message.error(error.message);
        }
    }, [error]);

    const handleChange = e => {
        setMessageDetails(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async () => {
        await sendMessage({variables: { input: messageDetails }});
        setMessageDetails({senderEmail: '', senderName: '', textMessage: '', senderPhoneNumber: ''});
    }

    return (

        <section className="w-full h-full flex flex-col gap-6 p-6 lg:px-32 lg:gap-20 bg-zinc-50">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                <div
                    className="w-full min-h-96 bg-cover bg-[url('https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2021/08/building.jpeg')]"></div>
                <div className="w-full min-h-96 bg-blue-950"></div>
                <div className="w-full min-h-96 bg-blue-950 p-12 flex flex-col gap-6 text-white">
                    <p className="text-xl font-bold">Contact details</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex gap-4 items-center">
                        <span className="text-2xl">
                        <IoLocationSharp className="text-orange-500 "/>
                        </span>

                            <p className="text-wrap font-semibold">1010 Avenue of the Moon
                                New York, NY 10018 US.</p>
                        </li>
                        <li className="flex gap-4 items-center">
                    <span className="text-2xl">
                        <FaPhoneAlt className="text-orange-500 "/>
                        </span>
                            <a href="tel:+1 628 123 4000" className="text-wrap font-semibold">+1 628 123 4000</a>
                        </li>
                        <li className="flex gap-4 items-center">
                    <span className="text-2xl">
                        <FaEnvelope className="text-orange-500 "/>
                        </span>
                            <a href="mailto:brandon@consulting.com"
                               className="font-semibold text-wrap">brandon@consulting.com</a>
                        </li>

                    </ul>

                    <ul className="flex flex-wrap items-center gap-4 text-black">
                        <li className="bg-white p-2 rounded-full text-start">
                            <GrFacebookOption/>
                        </li>
                        <li className="bg-white p-2 rounded-full text-start">
                            <GrTwitter/>
                        </li>
                        <li className="bg-white p-2 rounded-full text-start">
                            <GrLinkedinOption/>
                        </li>
                        <li className="bg-white p-2 rounded-full text-start">
                            <IoLogoGoogleplus/>
                        </li>
                        <li className="bg-white p-2 rounded-full text-start">
                            <GrSkype/>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
                <div className="grid gap-2 md:col-span-8">
                    <p className="font-bold text-xl">Feedback form</p>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
                    <span className="w-full grid gap-y-6 col-span-1">
                    <input type="text" placeholder="First name*" name="senderName" onChange={handleChange}
                           className="w-ful p-3 shadow-sm "/>
                    <input type="email" placeholder="Email*" name="senderEmail" onChange={handleChange}
                           className="w-ful p-3 shadow-sm "/>
                    <input type="tel" placeholder="Phone*" name="senderPhoneNumber" onChange={handleChange}
                           className="w-ful p-3 shadow-sm "/>
                    </span>
                        <span className="w-full grid gap-y-6 col-span-1">
                        <textarea name="textMessage" onChange={handleChange} id=""
                                  className="w-full h-32 shadow-sm"></textarea>
                        <button disabled={loading} onClick={handleSubmit}
                                className="p-4 bg-orange-500 rounded-md w-fit h-fit text-white flex items-center gap-2">
                            SUBMIT
                        <GoChevronRight/>
                        </button>
                    </span>

                    </form>
                </div>
                <div className="grid gap-2 md:col-span-4">
                    <p className="font-bold text-xl">Your contact</p>
                    <ul className="flex flex-col gap-6">
                        <li className="flex gap-3">
                            <img
                                src="https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2021/08/avatar-berg.jpeg"
                                alt="" className="h-20"/>
                            <span className="flex flex-col gap-1">
                        <p className="font-semibold">Berg Devien</p>
                        <p className="font-semibold">Berg Devien</p>
                        <p>Email: <a href="">berg@consulting.wp</a></p>
                        <p>Email: <a href="">berg@consulting.wp</a></p>
                    </span>
                        </li>
                        <li className="flex gap-3">
                            <img
                                src="https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2021/08/avatar-berg.jpeg"
                                alt="" className="h-20"/>
                            <span className="flex flex-col gap-1">
                        <p className="font-semibold">Berg Devien</p>
                        <p className="font-semibold">Berg Devien</p>
                        <p>Email: <a href="">berg@consulting.wp</a></p>
                        <p>Email: <a href="">berg@consulting.wp</a></p>
                    </span>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )

}
export default Contacts