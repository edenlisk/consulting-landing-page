import React, {useEffect, useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {UPDATE_COMPANY_INFO} from "../../../api/graphql.js";
import {message} from "antd";

const Self = () => {
    // const { loading, error, data } = useQuery(GET_COMPANY_INFO);
    // const [company, setCompany] = useState({
    //     name: '',
    //     address: {
    //         country: '',
    //         province: '',
    //         district: '',
    //         sector: '',
    //         street: '',
    //     },
    //     socials: [{ name: '', iconLink: '', socialMediaLink: '' }],
    //     aboutUs: '',
    //     ourMission: '',
    //     companyOverview: '',
    //     phoneNumber: '',
    //     email: '',
    //     history: [{ year: '', title: '', description: '' }]
    // });
    //
    // const [updateCompany, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_COMPANY_INFO);
    //
    // useEffect(() => {
    //     if (data) {
    //         // Remove __typename fields from the data
    //         const cleanData = JSON.parse(JSON.stringify(data.company, (key, value) =>
    //             key === '__typename' ? undefined : value
    //         ));
    //         setCompany(cleanData);
    //     }
    // }, [data]);
    //
    // useEffect(() => {
    //     if (updateError) return message.error(updateError.message);
    //     else return message.success('Company information updated successfully');
    // }, [updateError]);
    //
    // const handleChange = (e, section, index, isNested) => {
    //     const { name, value } = e.target;
    //     if (index !== undefined) {
    //         const updatedSection = [...company[section]];
    //         updatedSection[index][name] = value;
    //         setCompany({ ...company, [section]: updatedSection });
    //     } else if (isNested) {
    //         setCompany({
    //             ...company,
    //             [section]: {
    //                 ...company[section],
    //                 [name]: value
    //             }
    //         });
    //     } else {
    //         setCompany({ ...company, [name]: value });
    //     }
    // };
    //
    // const handleAddSocial = () => {
    //     setCompany({
    //         ...company,
    //         socials: [...company.socials, { name: '', iconLink: '', socialMediaLink: '' }]
    //     });
    // };
    //
    // const handleAddHistoryEvent = () => {
    //     setCompany({
    //         ...company,
    //         history: [...company.history, { year: '', title: '', description: '' }]
    //     });
    // };
    //
    // const handleSubmit = async () => {
    //     await updateCompany({
    //         variables: {
    //             input: { ...company, logo: undefined }
    //         }
    //     })
    // };
    //
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    return (
        <div>SELF</div>
        // <div className="container mx-auto p-4">
        //     <h1 className="text-2xl font-bold mb-4">Update Company Information</h1>
        //
        //     {/* Company Details */}
        //     <div className="mb-4">
        //         <label className="block mb-1 font-semibold">Company Name</label>
        //         <input
        //             type="text"
        //             name="name"
        //             value={company.name}
        //             onChange={(e) => handleChange(e)}
        //             className="w-full p-2 border border-gray-300 rounded"
        //         />
        //     </div>
        //
        //     {/* Address */}
        //     <div className="mb-4">
        //         <h2 className="text-xl font-semibold mb-2">Address</h2>
        //         {Object.keys(company.address).map((key) =>
        //             // key === 'mapCoords' ? (
        //             //     <div key={key} className="flex space-x-2 mb-2">
        //             //         <input
        //             //             type="text"
        //             //             name="lat"
        //             //             placeholder="Latitude"
        //             //             value={company.address.mapCoords.lat}
        //             //             onChange={(e) => handleChange(e, 'address', undefined, true)}
        //             //             className="w-full p-2 border border-gray-300 rounded"
        //             //         />
        //             //         <input
        //             //             type="text"
        //             //             name="lng"
        //             //             placeholder="Longitude"
        //             //             value={company.address.mapCoords.lng}
        //             //             onChange={(e) => handleChange(e, 'address', undefined, true)}
        //             //             className="w-full p-2 border border-gray-300 rounded"
        //             //         />
        //             //     </div>
        //             // ) : (
        //             //
        //             // )
        //             <div key={key} className="mb-2">
        //                 <label className="block mb-1 font-semibold">{key}</label>
        //                 <input
        //                     type="text"
        //                     name={key}
        //                     value={company.address[key]}
        //                     onChange={(e) => handleChange(e, 'address', undefined, true)}
        //                     className="w-full p-2 border border-gray-300 rounded"
        //                 />
        //             </div>
        //         )}
        //     </div>
        //
        //     {/* Socials */}
        //     <div className="mb-4">
        //         <h2 className="text-xl font-semibold mb-2">Social Media</h2>
        //         {company.socials.map((social, index) => (
        //             <div key={index} className="mb-2">
        //                 <input
        //                     type="text"
        //                     name="name"
        //                     placeholder="Social Media Name"
        //                     value={social.name}
        //                     onChange={(e) => handleChange(e, 'socials', index)}
        //                     className="w-full p-2 mb-1 border border-gray-300 rounded"
        //                 />
        //                 <input
        //                     type="text"
        //                     name="iconLink"
        //                     placeholder="Icon Link"
        //                     value={social.iconLink}
        //                     onChange={(e) => handleChange(e, 'socials', index)}
        //                     className="w-full p-2 mb-1 border border-gray-300 rounded"
        //                 />
        //                 <input
        //                     type="text"
        //                     name="socialMediaLink"
        //                     placeholder="Social Media Link"
        //                     value={social.socialMediaLink}
        //                     onChange={(e) => handleChange(e, 'socials', index)}
        //                     className="w-full p-2 border border-gray-300 rounded"
        //                 />
        //             </div>
        //         ))}
        //         <button
        //             onClick={handleAddSocial}
        //             className="px-4 py-2 bg-blue-500 text-white rounded"
        //         >
        //             Add Social Media
        //         </button>
        //     </div>
        //
        //     {/* About Us, Our Mission, Company Overview */}
        //     {['aboutUs', 'ourMission', 'companyOverview'].map((section) => (
        //         <div key={section} className="mb-4">
        //             <label className="block mb-1 font-semibold">{section.replace(/([A-Z])/g, ' $1')}</label>
        //             <textarea
        //                 name={section}
        //                 value={company[section]}
        //                 onChange={(e) => handleChange(e, section)}
        //                 className="w-full p-2 border border-gray-300 rounded"
        //                 rows="10"
        //             />
        //         </div>
        //     ))}
        //
        //     {/* Phone Number, Email */}
        //     {['phoneNumber', 'email'].map((field) => (
        //         <div key={field} className="mb-4">
        //             <label className="block mb-1 font-semibold">{field.replace(/([A-Z])/g, ' $1')}</label>
        //             <input
        //                 type="text"
        //                 name={field}
        //                 value={company[field]}
        //                 onChange={(e) => handleChange(e, field)}
        //                 className="w-full p-2 border border-gray-300 rounded"
        //             />
        //         </div>
        //     ))}
        //
        //     {/* History Events */}
        //     <div className="mb-4">
        //         <h2 className="text-xl font-semibold mb-2">History Events</h2>
        //         {company.history.map((event, index) => (
        //             <div key={index} className="mb-2">
        //                 <input
        //                     type="text"
        //                     name="year"
        //                     placeholder="Year"
        //                     value={event.year}
        //                     onChange={(e) => handleChange(e, 'history', index)}
        //                     className="w-full p-2 mb-1 border border-gray-300 rounded"
        //                 />
        //                 <input
        //                     type="text"
        //                     name="title"
        //                     placeholder="Title"
        //                     value={event.title}
        //                     onChange={(e) => handleChange(e, 'history', index)}
        //                     className="w-full p-2 mb-1 border border-gray-300 rounded"
        //                 />
        //                 <textarea
        //                     name="description"
        //                     placeholder="Description"
        //                     value={event.description}
        //                     onChange={(e) => handleChange(e, 'history', index)}
        //                     className="w-full p-2 border border-gray-300 rounded"
        //                     rows="10"
        //                 />
        //             </div>
        //         ))}
        //         <button
        //             onClick={handleAddHistoryEvent}
        //             className="px-4 py-2 bg-blue-500 text-white rounded"
        //         >
        //             Add History Event
        //         </button>
        //     </div>
        //
        //     <button onClick={handleSubmit} disabled={updateLoading} className="px-4 py-2 bg-green-500 text-white rounded">
        //         Submit
        //     </button>
        // </div>
    );
};

export default Self;
