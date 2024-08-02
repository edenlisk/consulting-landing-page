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
import {ADD_SERVICE, DELETE_SERVICE, GET_SERVICES, UPDATE_SERVICE} from "../../../api/graphql.js";
import ReactHtmlParser from 'html-react-parser';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const ServicesPage = () => {
    const {data: servicesData, error, loading: dataload} = useQuery(GET_SERVICES);
    const [data, setData] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    const [open, setOpen] = useState(false);
    const [isearch, setIsearch] = useState(false);
    const [isNew, setIsNew] = useState(false);
    const [Input, setInput] = useState(false);
    const [files, setFile] = useState(null);
    const [sideInfo, setSideInfo] = useState({title: '', serviceId: '', description: '', filePath: ''})
    const [placement, setPlacement] = useState('right');

    useEffect(() => {
        if (servicesData) {
            setData(servicesData.services);
        } else if (error) return message.error(error.message);
    }, [error, servicesData]);


    const [addService, {loading, error: addServiceError}] = useMutation(ADD_SERVICE, {
        refetchQueries: [GET_SERVICES,
            'fetchServices']
    });
    // const [Updateservice]=useMutation()
    const [deleteService, {loading: laod}] = useMutation(DELETE_SERVICE, {
        refetchQueries: [
            GET_SERVICES,
            'fetchServices'
        ]
    })

    const [updateService, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_SERVICE);

    useEffect(() => {
        if (updateError) return message.error(updateError.message);
    }, [updateError]);

    const handleSaveFile = async () => {
        if (isNew) {
            await addService({
                variables: {
                    input: {title: sideInfo.title, description: sideInfo.description},
                    file: files[0]
                },
            });
        } else {
            await updateService(
                {
                    variables: {
                        input: {title: sideInfo.title, description: sideInfo.description},
                        serviceId: sideInfo.serviceId
                    }
                }
            )
        }
        setSideInfo({title: '', serviceId: '', description: '', filePath: ''});
        setFile(null);
        setOpen(false);
    }
    const deleteRow = async (id) => {
        await deleteService({variables: {serviceId: id}});
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
    };


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        setIsNew(false)
    };

    const cancel = () => {
        setEditingKey('');
    };

    const getData = (record) => {
        if (record) {
            setIsNew(false);
            setFile(null);
            // setSideInfo(record);
            setSideInfo({title: record.title, serviceId: record.id, description: record.description, filePath: record.image?.filePath})
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
                    <img src={record.image?.filePath} alt={record.slug}
                         className='p-0 w-8 h-8  object-cover'
                    />
                )
        },
        {
            title: 'Description',
            dataIndex: 'description',
            width: '50%',
            render: (_, record) =>
                (
                    <div>{`${record.description?.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/).slice(0, 7).join(' ')} ...`}</div>
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
                        <FiTrash onClick={() => {
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
                    setSideInfo({title: '', serviceId: '', description: '', filePath: ''});
                    setFile(null);
                    setOpen(true)
                    setInput(true)
                    setIsNew(true)
                }} className='bg-blue-500 rounded text-white px-2 py-1 w-fit'>New
                </button>
            </div>
            <Form component={false}>
                <Table
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
                            setSideInfo({title: '', serviceId: '', description: '', filePath: ''});
                            setFile(null);
                            setOpen(false)
                        }}/>
                        <IoResizeOutline/>
                    </div>

                    {Input ?
                        <input type="text" id="fname" name="title" value={sideInfo.title || ""} onChange={handleInput}
                               placeholder='Add title' className='w-full p-2 rounded border'></input> :
                        <p className='text-2xl font-bold px-2' onClick={() => setInput(true)}>{sideInfo?.title}</p>}
                    <p className='text-md font-bold px-2'>Image</p>
                    {Input ? <input type="file" name="file" onInput={handleSelectFile}/> :
                        <img src={sideInfo.filePath} className='w-20 h-20 object-cover'/>}
                    <p className='text-md font-bold px-2'>Description</p>
                    {Input ?
                        <textarea id="description" name="description" value={sideInfo.description || ""}
                                  onChange={handleInput} placeholder='Enter description'
                                  className='w-full p-2 h-52 rounded border focus:outline-none'></textarea> :
                        <p className='hover:bg-zinc-100 py-1 px-2 rounded'
                           onClick={() => setInput(true)}>{sideInfo?.description}</p>}
                    <div className='flex flex-col gap-2'>
                        <>
                            {isNew ? <button type='button' disabled={loading} onClick={handleSaveFile}
                                             className='p-2 rounded bg-blue-400 w-fit text-white'>save
                            </button> : <button type='button' disabled={updateLoading} onClick={handleSaveFile}
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
