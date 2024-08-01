import React from 'react';
import {FaRegFilePdf} from "react-icons/fa6";

const Reports = () => {
    const pdfFiles = [
        {
            id: 1,
            title: 'Annual Report 2021',
            url: 'https://file-examples.com/storage/fe3f15b9da66a36baa1b51a/2017/10/file-sample_150kB.pdf'
        },
        {
            id: 2,
            title: 'Financial Report Q1 2022',
            url: 'https://file-examples.com/storage/fe3f15b9da66a36baa1b51a/2017/10/file-example_PDF_500_kB.pdf'
        },
        {
            id: 3,
            title: 'Sustainability Report 2022',
            url: 'https://file-examples.com/storage/fe3f15b9da66a36baa1b51a/2017/10/file-example_PDF_500_kB.pdf'
        },
        {
            id: 4,
            title: 'Market Analysis 2023',
            url: 'https://file-examples.com/storage/fe3f15b9da66a36baa1b51a/2017/10/file-example_PDF_500_kB.pdf'
        },
        {
            id: 5,
            title: 'Project Plan 2024',
            url: 'https://file-examples.com/storage/fe3f15b9da66a36baa1b51a/2017/10/file-example_PDF_500_kB.pdf'
        },
        {
            id: 6,
            title: 'Innovation Report 2023',
            url: 'https://file-examples.com/storage/fe3f15b9da66a36baa1b51a/2017/10/file-example_PDF_500_kB.pdf'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Reports</h1>
            <ul className="list-disc pl-5">
                {pdfFiles.map(file => (
                    <li key={file.id} className="mb-2 flex gap-2 list-none">
                        <FaRegFilePdf />
                        <a
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            {file.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reports;
