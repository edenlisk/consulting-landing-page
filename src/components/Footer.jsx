import {BsTwitter} from "react-icons/bs";
import {FaArrowRightLong, FaXTwitter} from "react-icons/fa6";
import {FaFacebookF, FaInstagram, FaWhatsapp} from "react-icons/fa";
import {gql, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {message} from "antd";
import {useCompanyInfo, useSocialMedias} from "../api/hooks.js";
import {GrFacebookOption, GrLinkedinOption, GrTwitter} from "react-icons/gr";

const icons = {
    twitter: <FaXTwitter/>,
    facebook: <FaFacebookF/>,
    instagram: <FaInstagram/>,
    whatsapp: <FaWhatsapp/>
}

const COMPANY_INFO = gql`
    query companyInfo {
        company:getCompany {
            name
            socials {
                name
                socialMediaLink
            }
        }
    }
`;

const Footer = () => {
    const { socialMedia } = useSocialMedias();
    const { rani } = useCompanyInfo();
    return (
        <footer className="  w-full bg-blue-950 py-12 px-6 lg:px-28 text-white">
            <div className=" grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col gap-12">
                    <p className=" text-3xl font-bold">{rani?.name}</p>
                    <div className=""></div>
                    <div className="flex gap-4 items-center">
                        <ul className="flex flex-wrap items-center gap-4 text-black">
                            {socialMedia.length ? socialMedia.map(({attributes}, index) => {
                                let icon;
                                if (attributes.name?.includes('facebook')) {
                                    icon = <GrFacebookOption/>;
                                } else if (attributes.name?.includes('twitter')) {
                                    icon = <GrTwitter/>
                                } else if (attributes.name?.includes('linkedin')) {
                                    icon = <GrLinkedinOption/>
                                } else {
                                    icon = <img className="size-4" src={attributes.icon?.data?.attributes?.url}
                                                alt={attributes.socialMediaLink}/>
                                }
                                return (
                                    <Link to={attributes.socialMediaLink} key={index}
                                        className="p-2 bg-white rounded-full text-start">
                                        {icon}
                                    </Link>
                                )
                            }) : null}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <p className="pb-1 text-3xl font-bold">extra links</p>
                    <ul className="grid grid-cols-2 gap-y-4">
                        <li>
                            <a href="/about-us">About us</a>
                        </li>
                        <li>
                            <a href="/contact-us">Contacts</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/our-team">Team</a>
                        </li>
                        <li>
                            <a href="/gallery">Gallery</a>
                        </li>
                        <li>
                            <a href="/reports">Reports</a>
                        </li>
                    </ul>
                </div>
                <div className=" flex flex-col gap-8">
                    <p className="text-3xl font-bold">subscribe</p>
                    <p>
                        Sign up for Alerts, Special Offers
                        <br/>
                        and Updates
                    </p>

                    <div className="flex items-center w-full">
                        <input
                            className="p-2 rounded-sm lg:min-w-46"
                            type="text"
                            name=""
                            id=""
                            placeholder="enter-your email"
                        />
                        <div className="h-10 p-2 bg-orange-500 flex items-center rounded-sm">
                            <FaArrowRightLong/>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;