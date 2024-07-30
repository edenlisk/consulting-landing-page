export const navigations = [
  {
    id: 1,
    text: "HOME",
    path: "/",
    submenu: false,
  },
  {
    id: 2,
    text: "SERVICES",
    path: "/services",
    submenu: true,
    sublinks: [
      { name: "Our product", link: "/" },
      { name: "Our services", link: "/" },
      { name: "Our team", link: "/" },
      { name: "Contact info", link: "/" },
    ],
  },
  {
    id: 3,
    text: "ABOUT US",
    path: "/about-us",
    submenu: true,
  },
  {
    id: 4,
    text: "TEAM",
    path: "/our-team",
    submenu: true,
  },
  {
    id: 5,
    text: "CONTACTS",
    path: "/contact-us",
    submenu: true,
  },
  {
    id: 6,
    text: "GALLERY",
    path: "/gallery",
    submenu: true,
  },
  {
    id: 6,
    text: "REPORTS",
    path: "/reports",
    submenu: true,
  },
];

import consultImg from '../images/consult.webp';
import officeImg from '../images/consult.webp';
export const cardsArray = [
  {
    id: 1,
    title: "Narrow Your Focus to Prevent Overanalysis",
    link: "",
    img: consultImg,
    date: "April 24, 2024",
  },
  {
    id: 2,
    title: "Three Social Media Hacks for the Busy Entrepreneur",
    link: "",
    img: officeImg,
    date: "March 5, 2024",
  },
  {
    id: 3,
    title: "Stick with Your Concept but Do Your Homework",
    link: "",
    img: consultImg,
    date: "April 24, 2024",
  },
  {
    id: 4,
    title: "Narrow Your Focus to Prevent Overanalysis",
    link: "",
    img: officeImg,
    date: "April 24, 2024",
  },
  {
    id: 5,
    title: "Narrow Your Focus to Prevent Overanalysis",
    link: "",
    img: consultImg,
    date: "April 24, 2024",
  },
];

export const servicesArray = [
  {
    id: 1,
    img: officeImg,
    title: "Business Unit Strategy",
    description:
      "The effort vastly improved the company’s planning and execution functions, they knew that in order to succeed in this era of technology their accounting systems needed.",
    link: "",
  },
  {
    id: 2,
    img: officeImg,
    title: "Turnaround Consulting",
    description:
      "Companies dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success.",
    link: "",
  },
  {
    id: 3,
    img: officeImg,
    title: "Bonds & Commodities",
    description:
      "Bonds and commodities are much more stable than stocks and trades. We allow our clients to invest in the right bonds & commodities.",
    link: "",
  },
  {
    id: 4,
    img: officeImg,
    title: "Audit & Assurance",
    description:
      "Audit and assurance is all about meticulous data analysis. Everything needs to be checked, double checked, and triple checked.",
    link: "",
  },
  {
    id: 5,
    img: officeImg,
    title: "Trades & Stocks",
    description:
      "This allows us to specialize in all dimensions of trades and stocks, because we have a specialist within the team for every scenario.",
    link: "",
  },
  {
    id: 6,
    img: officeImg,
    title: "Strategic Planning",
    description:
      "We work with our clients and do a deep analysis of their business. We help prepare possible outcomes to different decisions.",
    link: "",
  },
  {
    id: 7,
    img: officeImg,
    title: "Financial Projections",
    description:
      "This stops companies from taking drastic measures like downsizing or closing down sites; those things happen only with no or bad financial projections.",
    link: "",
  },
];

import profile1 from "../images/profile1.webp"
import profile2 from "../images/profile2.webp"

export const profilesArray = [
  {
    id: 1,
    name: "Emily Haden",
    title: "Founder/Founding Partner",
    description:
      "She is an accomplished business developer. Her skills at creating relationships with clients are...",
    link: "",
    img: profile1,
  },
  {
    id: 2,
    name: "Robert Henderson",
    title: "CEO/Managing Partner",
    description:
      "The founder of Consulting WP, he has been the captain of this ship from the beginning and has sailed...",
    link: "",
    img: profile2,
  },
  {
    id: 3,
    name: "Silana Jackson",
    title: "Consultant",
    description:
      "As we help other companies grow, she helps us grow. She handles all the internal work at WP consulting...",
    link: "",
    img: profile1,
  },
  {
    id: 4,
    name: "David James",
    title: "Auditor",
    description:
      "Being the CFO in the Financial Industry is a tough task, thankfully he was here to man the helm...",
    link: "",
    img: profile2,
  },
  {
    id: 5,
    name: "Patrick Woo Cheng",
    title: "CTO",
    description:
      "He has helped Business WordPress Theme reach new heights and enter new markets. His skills of understanding...",
    link: "",
    img: profile1,
  },
];

export const achievements = [
  {
    id: 1,
    title: "Start with a small service",
    year: "1985	",
    description: "This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.",
  },
  {
    id: 2,
    title: "First employees",
    year: "1990	",
    description: "This was the first period when Consulting WP actually felt like it would stick around for a while. We realized we were growing more stable and expanding at the same time. We needed a new office as we had severely outgrown the last one. We started scouting for a new location.",
  },
  {
    id: 3,
    title: "First recognition",
    year: "2001	",
    description: "By this time we were a well known name within the industry. We had been prominent members of the industry for more than 16 years and worked for some of the biggest clients in the industry; we weren’t dismissed by anyone because we could not be dismissed by anyone.",
  },
  {
    id: 4,
    title: "Consulting wp — corporation or family",
    year: "2015	",
    description: "Our journey has only brought us higher. Information Technology completely changes the way we analyze and present data. We have embraced new technologies and have ensured that our clients receive cutting edge analytics. As we go on towards the future we intend to exploit the full potential of new technologies to power our services.",
  },
];
