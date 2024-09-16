import {GoChevronRight} from "react-icons/go";
import {IoLocationSharp} from "react-icons/io5";
import {IoLogoGoogleplus} from "react-icons/io";
import {FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import {GrFacebookOption, GrTwitter, GrLinkedinOption, GrSkype} from "react-icons/gr";
import {useEffect, useState} from "react";
import {useMutation} from "@apollo/client";
import {SEND_MESSAGE} from "../api/graphql.js";
import {message} from "antd";
import {useCompanyInfo, useSocialMedias} from "../api/hooks.js";
import {Link, useNavigate} from "react-router-dom";

const Contacts = () => {
    const {rani} = useCompanyInfo();
    const {socialMedia} = useSocialMedias();
    const navigate = useNavigate();
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
        await sendMessage({variables: {input: messageDetails}});
        setMessageDetails({senderEmail: '', senderName: '', textMessage: '', senderPhoneNumber: ''});
    }

    return (

        <section className="flex flex-col w-full h-full gap-6 p-6 lg:px-32 lg:gap-20 bg-zinc-50">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                <div
                    className="w-full min-h-96 bg-cover bg-[url('https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2021/08/building.jpeg')]"></div>
                <div className="w-full min-h-96 bg-blue-950"></div>
                <div className="relative flex flex-col w-full gap-6 p-12 text-white min-h-96 bg-blue-950">
                    <div
                        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10 bg-[url('https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2021/08/building.jpeg')]"></div>

                    <p className="text-xl font-bold">Contact details</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                        <span className="text-2xl">
                        <IoLocationSharp className="text-orange-500 "/>
                        </span>

                            <p className="font-semibold text-wrap">
                                {`${rani.country}, ${rani.province}, ${rani.district}`}
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                    <span className="text-2xl">
                        <FaPhoneAlt className="text-orange-500 "/>
                        </span>
                            <a href={`tel:+${rani.phoneNumber}`}
                               className="font-semibold text-wrap">{rani.phoneNumber}</a>
                        </li>
                        <li className="flex items-center gap-4">
                    <span className="text-2xl">
                        <FaEnvelope className="text-orange-500 "/>
                        </span>
                            <a href={`mailto:${rani.email}`}
                               className="font-semibold text-wrap">{rani.email}</a>
                        </li>

                    </ul>

                    <ul className="flex flex-wrap items-center gap-4 text-black">
                        {socialMedia.length && socialMedia.map(({attributes}, index) => {
                            let icon = null;
                            if (attributes.name?.includes('facebook')) {
                                icon = <GrFacebookOption/>;
                            } else if (attributes.name?.includes('twitter')) {
                                icon = <GrTwitter/>
                            } else if (attributes.name?.includes('linkedin')) {
                                icon = <GrLinkedinOption/>
                            } else {
                                icon = <img className="size-4" src={attributes.icon?.data?.attributes?.url} alt={attributes.socialMediaLink}/>
                            }
                            return (
                                <Link to={attributes.socialMediaLink}  key={index} className="p-2 bg-white rounded-full text-start">
                                    {icon}
                                </Link>
                            )
                        })}
                        {/*<li className="p-2 bg-white rounded-full text-start">*/}
                        {/*<GrFacebookOption/>*/}
                        {/*</li>*/}
                        {/*<li className="p-2 bg-white rounded-full text-start">*/}
                        {/*    <GrTwitter/>*/}
                        {/*</li>*/}
                        {/*<li className="p-2 bg-white rounded-full text-start">*/}
                        {/*    <GrLinkedinOption/>*/}
                        {/*</li>*/}
                        {/*<li className="p-2 bg-white rounded-full text-start">*/}
                        {/*    <IoLogoGoogleplus/>*/}
                        {/*</li>*/}
                        {/*<li className="p-2 bg-white rounded-full text-start">*/}
                        {/*    <GrSkype/>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
                <div className="grid gap-2 md:col-span-8">
                    <p className="text-xl font-bold">Feedback form</p>
                    <form className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-y-6">
                    <span className="grid w-full col-span-1 gap-y-6">
                    <input type="text" placeholder="First name*" name="senderName" onChange={handleChange}
                           className="w-full p-3 shadow-sm outline-orange-400 "/>
                    <input type="email" placeholder="Email*" name="senderEmail" onChange={handleChange}
                           className="w-full p-3 shadow-sm outline-orange-400 "/>
                    <input type="tel" placeholder="Phone*" name="senderPhoneNumber" onChange={handleChange}
                           className="w-full p-3 shadow-sm outline-orange-400 "/>
                    </span>
                        <span className="grid w-full col-span-1 gap-y-6">
                        <textarea name="textMessage" onChange={handleChange} id=""
                                  className="w-full h-32 shadow-sm outline-orange-400"></textarea>
                        <button disabled={loading} onClick={handleSubmit}
                                className="flex items-center gap-2 p-4 text-white bg-orange-500 rounded-md w-fit h-fit">
                            SUBMIT
                        <GoChevronRight/>
                        </button>
                    </span>

                    </form>
                </div>
            </div>
        </section>
    )

}
export default Contacts