import React, {useEffect, useRef, useState} from 'react';
import {
    Form,
    Input,
    InputNumber,
    Drawer,
    Popconfirm,
    Table,
    Typography,
    DatePicker,
    Button,
    Space,
    message
} from 'antd';
import {HiOutlineChevronDoubleRight} from "react-icons/hi";
import {IoResizeOutline, IoTimeOutline} from "react-icons/io5";
import {PiUsersFill} from "react-icons/pi";
import {FiEdit2} from "react-icons/fi";
import {GoSearch} from "react-icons/go";
import {FiTrash} from "react-icons/fi";
import RichTextEditor from "../../../components/RichTextEditor.jsx";
import {useMutation, useQuery} from "@apollo/client";
import { ADD_SERVICE, DELETE_SERVICE, GET_SERVICES} from "../../../api/graphql.js";
import ReactHtmlParser from 'html-react-parser';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const ServicesPage = () => {
    const {data: servicesData, error,loading:dataload} = useQuery(GET_SERVICES);
    const [data, setData] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    const [open, setOpen] = useState(false);
    const [isearch, setIsearch] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [Input, setInput] = useState(false);
    const [files, setFile] = useState(null);
    const [sideInfo, setSideInfo] = useState({title: '', blogId: '', content: '<p>Hello</p>'})
    const [placement, setPlacement] = useState('right');
    const [htmlContent, setHtmlContent] = useState('<p>Hello</p>');

    useEffect(() => {
        if (servicesData) {
            setData(servicesData.services);
            console.log(servicesData.services)
        } else if (error) return message.error(error.message);
        // console.log(servicesData)
    }, [error, servicesData]);

    const rteRef = useRef(null);

    const [addService, {loading, error: addServiceError}] = useMutation(ADD_SERVICE,{
        refetchQueries:[GET_SERVICES,
        'fetchServices',]
    });
    // const [Updateservice]=useMutation()
    const [deleteservice,{loading:laod}]=useMutation(DELETE_SERVICE,{
        refetchQueries:[
            GET_SERVICES,
            'fetchServices'
        ]
    })
    const handleSaveFile = async () => {
        // handleGetHtmlContent();
        if (rteRef.current) {
            // console.log('[htmlContent]: ', rteRef.current.getHtml());
            // setSideInfo(prevState => ({...prevState, content: rteRef.current.getHtml()}));
            if (!sideInfo.blogId) {
                // console.log('')
                // await addService({
                //     variables: {
                //         input: {title: sideInfo.title, content: rteRef.current.value},
                //         file: files[0]
                //     },
                // });
            } else {
                // console.log('update');
            }
            console.log(sideInfo);
        }
        setOpen(false);
        rteRef.current.value = '<p>Hello</p>';
        // console.log('after')
    }
    // const updateService = () => {

    // }
    const deleteRow = (id) => {
        console.log(id)

        deleteservice({variables:{serviceId:id}});

    }

    useEffect(() => {
        if (addServiceError) {
            return message.error(addServiceError.message);
        }
    }, [addServiceError]);

    const handleSelectFile = (e) => {
        setFile(e.target.files);
    }

    const dateChange = (date, dateString) => {
        console.log(date, dateString);
    };


    const handleInput = (e) => {
        setSideInfo((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
        console.log(sideInfo)
    };

    const desriptionChange=()=>{
        rteRef.current.getHtml()

        console.log(rteRef.current.getHtml())
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        setIsNew(false)
        setHtmlContent('<p>Hello</p>');
    };

    const cancel = () => {
        setEditingKey('');
    };
    // const save = async (key) => {
    //     try {
    //         const newData = [...data];
    //         const index = newData.findIndex((item) => key === item.id);
    //         if (index > -1) {
    //             const item = newData[index];
    //             newData.splice(index, 1, {
    //                 ...item,
    //             });
    //             setData(newData);
    //             setEditingKey('');
    //         } else {
    //             newData.push(row);
    //             setData(newData);
    //             setEditingKey('');
    //         }
    //     } catch (errInfo) {
    //         console.log('Validate Failed:', errInfo);
    //     }
    // };

    const getData = (record) => {
        if (record) {
            console.log('[getData]: ', record);
            setSideInfo(record);
            setHtmlContent(record.description)
            rteRef.current.value = record.description;
            setHtmlContent(record.content);
            console.log(htmlContent.content)
        }

    };

    const updateRow = (id) => {
        const indexToUpdate = data?.findIndex(item => id === item.id);
        if (indexToUpdate !== -1) {
            // Create a shallow copy of the array using slice
            const newData = [...data];
            newData[indexToUpdate] = {
                ...newData[indexToUpdate],
                title: sideInfo.title,
                content: sideInfo.content
            };
            setSideInfo(newData[indexToUpdate]);
            newData.splice(indexToUpdate, 1, sideInfo);
            setData(newData);
            console.log(newData[indexToUpdate]);
            setInput(false);
            setSideInfo({title: '', blogId: '', content: ''});
            setEditingKey('');
            setOpen(false);

        }
    };

    const columns = [
        {
            title: 'title',
            dataIndex: 'title',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (_, record) =>
                (
                   <img src={record.image} alt={record.slug}
                   className='p-0 w-8 h-8  object-cover'
                   />
                )
        },
        {
            title: 'Display',
            dataIndex: 'dislay',
            width:'30px',
            render: (_, record) =>
                (
                   <img src={record.image} alt={record.slug}/>
                )
        },
        {
            title: 'Description',
            dataIndex: 'description',
            width: '50%',
            render: (_, record) =>
                (
                    <div>{`${record.description?.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/).slice(0,7).join(' ')} ...`}</div>
                )

             
            
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) => {
                return (
                    <div className='flex gap-2 text-[18px] items-center w-full justify-center'>
                        <FiEdit2 onClick={() => {
                            setOpen(true)
                            getData(record)
                            
                        }}/>
                        <FiTrash onClick={()=>{
                            deleteRow(record.id)
                        }}/>
                    </div>
                );
            },
        },
    ];

    return (
        <>

            <p className='text-xl font-bold pb-2 px-2'>Services</p>
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
                        rteRef.current.value = "<p>Hello</p>"
                    }
                    setOpen(true)
                    setInput(true)
                    setIsNew(true)
                }} className='bg-blue-500 rounded text-white px-2 py-1 w-fit'>New
                </button>
            </div>
            <Form component={false}>
                <Table
                    rowSelection={rowSelection}
                    bordered
                    dataSource={data}
                    columns={columns}
                    loading={dataload}
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
                            setSideInfo({title: '', blogId: '', content: ''})
                            setOpen(false)
                        }}/>
                        <IoResizeOutline/>
                    </div>

                    {Input ?
                        <input type="text" id="fname" name="title" value={sideInfo.title || ""} onChange={handleInput}
                               placeholder='Add title' className='w-full p-2 rounded border'></input> :
                        <p className='text-2xl font-bold px-2' onClick={() => setInput(true)}>{sideInfo?.title}</p>}
                    <div className='flex gap-4 items-center text-md '>
            <span className='flex items-center gap-2 text-[#a6a5a3] p-1 px-2 rounded w-40 hover:bg-zinc-100'>
            <IoTimeOutline/>
            Date created
            </span>
                        {Input ? <DatePicker onChange={dateChange}/> :
                            <span className='p-1 px-2 rounded w-full hover:bg-zinc-100'>Jan 18,2024 18:20</span>}
                    </div>
                    <div className='flex gap-4 items-center '>
            <span className='flex items-center gap-2 text-[#a6a5a3] p-1 px-2 rounded w-40 hover:bg-zinc-100'>
            <PiUsersFill/>
            Published
            </span>
                        <span className='p-1 px-2 rounded w-full hover:bg-zinc-100'>Jan 18,2024 18:20</span>
                    </div>
                    <input type="file" name="file" onInput={handleSelectFile}/>
                    <div className='flex flex-col gap-2'>
                        <p className='text-md font-bold px-2'>Description</p>
                        <RichTextEditor rteRef={rteRef} change={desriptionChange} htmlContent={htmlContent}/>
                        <>
                        {isNew? <button type='button' disabled={loading} onClick={handleSaveFile}
                                className='p-2 rounded bg-blue-400 w-fit text-white'>save
                        </button>:<button type='button' disabled={loading} onClick={handleSaveFile}
                                className='p-2 rounded bg-blue-400 w-fit text-white'>Update
                        </button>}
                        </>
                       
                       
                    </div>
                </div>
            </Drawer>

        </>

    );
};

export default ServicesPage;
