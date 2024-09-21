import React from 'react';
import {FaRegFilePdf} from "react-icons/fa6";
import {useGetReports} from "../api/hooks.js";

const Reports = () => {
    const { reports } = useGetReports();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Reports</h1>
            <ul className="list-disc pl-5">
                {reports.length && reports.map((file, index) => {
                    return (
                        <li key={index} className="mb-2 flex gap-2 list-none">
                            <FaRegFilePdf/>
                            <a
                                href={file.attributes?.document?.data[0]?.attributes?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                {file.attributes?.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Reports;
