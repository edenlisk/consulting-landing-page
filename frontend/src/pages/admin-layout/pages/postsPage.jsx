// import React, {useEffect, useRef, useState} from 'react';
// import {
//     Form,
//     Input,
//     InputNumber,
//     Drawer,
//     Popconfirm,
//     Table,
//     Typography,
//     DatePicker,
//     Button,
//     Space,
//     message
// } from 'antd';
// import {HiOutlineChevronDoubleRight} from "react-icons/hi";
// import {IoResizeOutline, IoTimeOutline} from "react-icons/io5";
// import {PiUsersFill} from "react-icons/pi";
// import {FiEdit2} from "react-icons/fi";
// import {GoSearch} from "react-icons/go";
// import {FiTrash} from "react-icons/fi";
// import RichTextEditor from "../../../components/RichTextEditor.jsx";
// import {useMutation, useQuery} from "@apollo/client";
// import {ADD_BLOG, GET_BLOGS} from "../../../api/graphql.js";
// import ReactHtmlParser from 'html-react-parser';
// import './syncfusion-overrides.css';
//
// const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//         console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
// };
//
// const PostsPage = () => {
//     const {data: blogsData, error} = useQuery(GET_BLOGS);
//     const [data, setData] = useState([]);
//     const [editingKey, setEditingKey] = useState('');
//     const [open, setOpen] = useState(false);
//     const [isearch, setIsearch] = useState(false);
//     const [Input, setInput] = useState(false);
//     const [files, setFile] = useState(null);
//     const [sideInfo, setSideInfo] = useState({title: '', blogId: '', content: '<p>Hello</p>', createdAt: ''})
//     const [placement, setPlacement] = useState('right');
//     const [htmlContent, setHtmlContent] = useState('<p>Hello</p>');
//     const [isNew, setIsNew] = useState(false);
//
//     useEffect(() => {
//         if (blogsData) {
//             setData(blogsData.blogs);
//         } else if (error) return message.error(error.message);
//     }, [error, blogsData]);
//
//     const rteRef = useRef(null);
//
//     const [addPost, {loading, error: addPostError}] = useMutation(ADD_BLOG);
//     const handleSaveFile = async () => {
//
//         if (rteRef.current) {
//             // console.log('[htmlContent]: ', rteRef.current.getHtml());
//             setSideInfo(prevState => ({...prevState, content: rteRef.current.value}));
//             // setSideInfo(prevState => ({...prevState, content: rteRef.current.getHtml()}));
//             if (!sideInfo.blogId) {
//                 // await addPost({
//                 //     variables: {
//                 //         input: {title: sideInfo.title, content: rteRef.current.value},
//                 //         file: files[0]
//                 //     },
//                 // });
//             } else {
//                 console.log('update');
//             }
//         }
//         setOpen(false);
//         // rteRef.current.value = '<p>Hello</p>';
//         console.log(rteRef.current.value)
//     }
//
//     useEffect(() => {
//         if (addPostError) {
//             return message.error(addPostError.message);
//         }
//     }, [addPostError]);
//
//     const handleSelectFile = (e) => {
//         setFile(e.target.files);
//     }
//
//     const dateChange = (date, dateString) => {
//         console.log(date, dateString);
//     };
//
//
//     const handleInput = (e) => {
//         setSideInfo((prev) => ({
//             ...prev, [e.target.name]: e.target.value
//         }));
//         console.log(sideInfo)
//     };
//
//
//     const desriptionChange = () => {
//         // rteRef.current.getHtml()
//
//         console.log(htmlContent)
//     };
//
//     const showDrawer = () => {
//         setOpen(true);
//     };
//
//     const onClose = () => {
//         setOpen(false);
//         setHtmlContent('<p>Hello</p>');
//     };
//
//     const cancel = () => {
//         setEditingKey('');
//     };
//
//     const getData = (record) => {
//         if (record) {
//             setSideInfo(record)
//             setHtmlContent(record.content);
//             setIsNew(false);
//         }
//
//     };
//
//     const columns = [
//         {
//             title: 'title',
//             dataIndex: 'title',
//         },
//         {
//             title: 'description',
//             dataIndex: 'content',
//             width: '70%',
//             render: (_, record) => {
//                 if (record.content) return <div>{ReactHtmlParser(record.content)}</div>
//             }
//         },
//         {
//             title: 'Action',
//             dataIndex: 'action',
//             render: (_, record) => {
//                 return (
//                     <div className='flex gap-2 items-center'>
//                         <FiEdit2 onClick={() => {
//                             getData(record)
//                             setOpen(true)
//                         }}/>
//                         <FiTrash/>
//                     </div>
//                 );
//             },
//         },
//     ];
//
//     return (
//         <>
//
//             <p className='text-xl font-bold pb-2 px-2'>Blogs</p>
//             <div className="flex justify-end gap-2 items-center w-full pb-3">
//           <span className='flex items-center w-fit'>
//             <span onClick={() => setIsearch(!isearch)} className='hover:bg-zinc-100 p-2 rounded-md'>
//           <GoSearch/>
//             </span>
//             <input type='text' placeholder='type to search...' name=''
//                    className={`${isearch ? 'w-42' : 'w-0 hidden'} px-2 py-1 transition-all duration-1000`}></input>
//           </span>
//                 <button type='button' onClick={() => {
//                     if (rteRef.current) {
//                         rteRef.current.value = "<p>Hello</p>"
//                     }
//                     setOpen(true)
//                     setInput(true)
//                     setIsNew(true)
//                 }} className='bg-blue-500 rounded text-white px-2 py-1 w-fit'>New
//                 </button>
//             </div>
//             <Form component={false}>
//                 <Table
//                     rowSelection={rowSelection}
//                     bordered
//                     dataSource={data}
//                     columns={columns}
//                     rowClassName="editable-row"
//                     pagination={{
//                         onChange: cancel,
//                     }}
//                     key="id"
//                 />
//             </Form>
//
//             <Drawer
//                 width={700}
//                 onClose={onClose}
//                 open={open}
//                 closable={false}
//             >
//                 <div className="flex flex-col gap-4">
//
//                     <div className='flex gap-1 items-center'>
//
//                         <HiOutlineChevronDoubleRight onClick={() => {
//                             setSideInfo({title: '', blogId: '', content: '', createdAt: ''})
//                             setOpen(false)
//                         }}/>
//                         <IoResizeOutline/>
//                     </div>
//
//                     {Input ?
//                         <input type="text" id="fname" name="title" value={sideInfo.title || ""} onChange={handleInput}
//                                placeholder='Add title' className='w-full p-2 rounded border'></input> :
//                         <p className='text-2xl font-bold px-2' onClick={() => setInput(true)}>{sideInfo?.title}</p>}
//                     <div className='flex gap-4 items-center text-md '>
//                         <span className='flex items-center gap-2 text-[#a6a5a3] p-1 px-2 rounded w-40 hover:bg-zinc-100'>
//                             <IoTimeOutline/>
//                             Date created
//                         </span>
//                         {Input ? <DatePicker onChange={dateChange}/> :
//                             <span className='p-1 px-2 rounded w-full hover:bg-zinc-100'>{sideInfo.createdAt}</span>}
//                     </div>
//                     <input type="file" name="file" onInput={handleSelectFile}/>
//                     <div className='flex flex-col gap-2'>
//                         <p className='text-md font-bold px-2'>Description</p>
//                         <button type='button' disabled={loading} onClick={handleSaveFile}
//                                 className='p-2 rounded bg-blue-400 w-fit text-white'>save
//                         </button>
//                         <RichTextEditor rteRef={rteRef} change={desriptionChange} htmlContent={htmlContent}/>
//                     </div>
//                 </div>
//             </Drawer>
//         </>
//
//     );
// };
//
// export default PostsPage;

import React, { useEffect, useRef, useState } from 'react';
import { Form, Input, Drawer, Table, DatePicker, Button, message } from 'antd';
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { IoResizeOutline, IoTimeOutline } from "react-icons/io5";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import RichTextEditor from "../../../components/RichTextEditor.jsx";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_BLOG, GET_BLOGS } from "../../../api/graphql.js";
import ReactHtmlParser from 'html-react-parser';
import './syncfusion-overrides.css';
import moment from 'moment';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const PostsPage = () => {
    const { data: blogsData, error } = useQuery(GET_BLOGS);
    const [data, setData] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    const [open, setOpen] = useState(false);
    const [isearch, setIsearch] = useState(false);
    const [Input, setInput] = useState(false);
    const [files, setFile] = useState(null);
    const [sideInfo, setSideInfo] = useState({ title: '', blogId: '', content: '<p>Hello</p>', createdAt: '' });
    const [htmlContent, setHtmlContent] = useState('<p>Hello</p>');
    const [isNew, setIsNew] = useState(false);

    useEffect(() => {
        if (blogsData) {
            setData(blogsData.blogs);
        } else if (error) return message.error(error.message);
    }, [error, blogsData]);

    const rteRef = useRef(null);

    const [addPost, { loading, error: addPostError }] = useMutation(ADD_BLOG, {
        refetchQueries: [{ query: GET_BLOGS }],
    });

    const handleSaveFile = async () => {
        if (rteRef.current) {
            const content = rteRef.current.value;
            setSideInfo(prevState => ({ ...prevState, content }));
            try {
                if (isNew) {
                    await addPost({
                        variables: {
                            input: { title: sideInfo.title, content },
                            file: files ? files[0] : null
                        },
                    });
                    message.success('Post added successfully');
                } else {
                    // Add updatePost mutation logic here
                    message.success('Post updated successfully');
                }
                setOpen(false);
                setSideInfo({ title: '', blogId: '', content: '<p>Hello</p>', createdAt: '' });
                setHtmlContent('<p>Hello</p>');
            } catch (error) {
                message.error(error.message);
            }
        }
    }

    useEffect(() => {
        if (addPostError) {
            message.error(addPostError.message);
        }
    }, [addPostError]);

    const handleSelectFile = (e) => {
        setFile(e.target.files);
    }

    const dateChange = (date, dateString) => {
        setSideInfo(prev => ({ ...prev, createdAt: dateString }));
    };

    const handleInput = (e) => {
        setSideInfo((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        setHtmlContent('<p>Hello</p>');
    };

    const cancel = () => {
        setEditingKey('');
    };

    const getData = (record) => {
        if (record) {
            setSideInfo(record);
            setHtmlContent(record.content);
            setIsNew(false);
        }
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'content',
            width: '70%',
            render: (_, record) => {
                if (record.content) return <div>{ReactHtmlParser(record.content)}</div>
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) => {
                return (
                    <div className='flex gap-2 items-center'>
                        <FiEdit2 onClick={() => {
                            getData(record);
                            setOpen(true);
                        }}/>
                        <FiTrash/>
                    </div>
                );
            },
        },
    ];

    return (
        <>
            <p className='text-xl font-bold pb-2 px-2'>Blogs</p>
            <div className="flex justify-end gap-2 items-center w-full pb-3">
                <span className='flex items-center w-fit'>
                    <span onClick={() => setIsearch(!isearch)} className='hover:bg-zinc-100 p-2 rounded-md'>
                        <GoSearch/>
                    </span>
                    <input type='text' placeholder='type to search...' name=''
                           className={`${isearch ? 'w-42' : 'w-0 hidden'} px-2 py-1 transition-all duration-1000`}></input>
                </span>
                <button type='button' onClick={() => {
                    if (rteRef.current) {
                        rteRef.current.value = "<p>Hello</p>";
                    }
                    setOpen(true);
                    setInput(true);
                    setIsNew(true);
                    setSideInfo({ title: '', blogId: '', content: '<p>Hello</p>', createdAt: '' });
                }} className='bg-blue-500 rounded text-white px-2 py-1 w-fit'>New</button>
            </div>
            <Form component={false}>
                <Table
                    rowSelection={rowSelection}
                    bordered
                    dataSource={data}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                    rowKey="id"
                />
            </Form>

            <Drawer
                width={700}
                onClose={onClose}
                open={open}
                closable={false}
            >
                <div className="flex flex-col gap-4">
                    <div className='flex gap-1 items-center'>
                        <HiOutlineChevronDoubleRight onClick={() => {
                            setSideInfo({ title: '', blogId: '', content: '<p>Hello</p>', createdAt: '' });
                            setOpen(false);
                        }}/>
                        <IoResizeOutline/>
                    </div>

                    <input type="text" id="fname" name="title" value={sideInfo.title || ""} onChange={handleInput}
                           placeholder='Add title' className='w-full p-2 rounded border'/>

                    <div className='flex gap-4 items-center text-md '>
                        <span className='flex items-center gap-2 text-[#a6a5a3] p-1 px-2 rounded w-40 hover:bg-zinc-100'>
                            <IoTimeOutline/>
                            Date created
                        </span>
                        <DatePicker onChange={dateChange} value={sideInfo.createdAt ? moment(sideInfo.createdAt) : null}/>
                    </div>

                    <input type="file" name="file" onInput={handleSelectFile}/>

                    <div className='flex flex-col gap-2'>
                        <p className='text-md font-bold px-2'>Description</p>
                        <RichTextEditor rteRef={rteRef} change={() => setHtmlContent(rteRef.current.value)} htmlContent={htmlContent}/>
                    </div>

                    <button type='button' disabled={loading} onClick={handleSaveFile}
                            className='p-2 rounded bg-blue-400 w-fit text-white'>Save
                    </button>
                </div>
            </Drawer>
        </>
    );
};

export default PostsPage;
