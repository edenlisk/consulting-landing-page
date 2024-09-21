
// {
//   name: "home",
//   submenu: true,
//   sublinks: [
//         { name: "Our product", link: "/" },
//         { name: "Our services", link: "/" },
//         { name: "Our team", link: "/" },
//         { name: "Contact info", link: "/" },
//
//   ],
// },
// {
//   name: "services",
//   submenu: true,
//   sublinks: [
//         { name: "Our product 1", link: "/" },
//         { name: "Our services 1", link: "/" },
//         { name: "Our team 1", link: "/" },
//         { name: "Contact info 1", link: "/" },
//
//   ],
// },
// {
//   name: "contacts",
//   submenu: true,
//   sublinks: [
//         { name: "Our product 2", link: "/" },
//         { name: "Our services 2", link: "/" },
//         { name: "Our team 2", link: "/" },
//         { name: "Contact info 2", link: "/" },
//
//   ],
// },

export const menuLinks = [
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
        id: 7,
        text: "REPORTS",
        path: "/reports",
        submenu: true,
    },
  ];

  export const aboutNavs=[
    {
      id:1,
      title:'Company Overview',
      link:'company-overview',
    },
    {
      id:2,
      title:'Careers',
      link:'careers',
    },
    {
      id:3,
      title:'Company History',
      link:'company-history',
    },
    {
      id:4,
      title:'Our approach',
      link:'our-approach',
    },
    {
      id:5,
      title:'Partners',
      link:'partners',
    },

  ]