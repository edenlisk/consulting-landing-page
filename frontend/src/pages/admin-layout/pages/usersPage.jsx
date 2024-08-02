import React, {useEffect, useState} from 'react';
import {Form, Input, InputNumber, Drawer, Popconfirm, Table, message} from 'antd';
import {HiOutlineChevronDoubleRight} from "react-icons/hi";
import {IoResizeOutline, IoTimeOutline} from "react-icons/io5";
import {PiUsersFill} from "react-icons/pi";
import {FiEdit2} from "react-icons/fi";
import {GoSearch} from "react-icons/go";
import {FiTrash} from "react-icons/fi";
import {useMutation, useQuery} from "@apollo/client";
import {ADD_USER, GET_USERS, REMOVE_USER, UPDATE_USER} from "../../../api/graphql.js";
import {useNavigate} from "react-router-dom";


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const UsersPage = () => {

    const [register, { loading: registerLoading, error: registerError, data: userDataM }] = useMutation(ADD_USER,{
        refetchQueries:[
            GET_USERS,
            'Users'
        ]
    });
    const [ updateUser, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_USER, {
        refetchQueries: [GET_USERS, 'Users']
    });

    const { data: userDataQ, error,loading } = useQuery(GET_USERS);
    const [removeUser, { loading: removeLoading, error: removeError}] = useMutation(REMOVE_USER, {
        refetchQueries: [GET_USERS, 'Users']
    });
    const [data, setData] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    const [open, setOpen] = useState(false);
    const [isearch, setIsearch] = useState(false);
    const [Input, setInput] = useState(false);
    const [file, setFile] = useState(null);
    const [isNew, setIsNew] = useState(false);
    const [sideInfo, setSideInfo] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        position: '',
        background: '',
        userId: ''
    })
    const [placement, setPlacement] = useState('right');
    const navigate = useNavigate();

    useEffect(() => {
        if (userDataQ) {
            setData(userDataQ.team);
        } else if (error) {
            message.error(error.message);
        }
    }, [userDataQ, error, navigate]);


    useEffect(() => {
        if (updateError) return message.error(updateError.message);
        if (removeError) return message.error(removeError.message);
    }, [updateError, removeError]);

    const dateChange = (date, dateString) => {
        console.log(date, dateString);
    };

    useEffect(() => {
        if (userDataM) {
            return message.success('User added successfully');
        } else if (registerError) {
            return message.error(registerError.message);
        }
    }, [registerError, userDataM]);

    const handleInput = (e) => {
        setSideInfo((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isNew) {
            await register({
                variables: {
                    input: {...sideInfo, userId: undefined},
                    file: file[0]
                }
            });
        } else {
            await updateUser(
                {
                    variables: {
                        input: {fullName: sideInfo.fullName, background: sideInfo.background, position: sideInfo.position },
                        userId: sideInfo.userId
                    }
                }
            )
        }
        setIsNew(false);
        setOpen(false);
    }

    const showDrawer = () => {
        setOpen(true);
    };

    const handleSelectFile = (e) => {
        setFile(e.target.files);
    }

    const onClose = () => {
        setOpen(false);
        setIsNew(false)
    };

    const cancel = () => {
        setEditingKey('');
    };

    const getData = (record) => {
        if (record) {
            setSideInfo(record)
            setInput(false)
            setFile(null);
        }
    };

    const handleDelete = async (id) => {
        await removeUser({variables: {userId: id}});
    }

    const columns = [
        {
            title: 'Full name',
            dataIndex: 'fullName',
        },
        {
            title: 'Profile',
            dataIndex: 'profile',
            width: "10px",
            render: (_, record) => {
                return (
                    <img
                        src={record.profile?.filePath}
                        alt='profile' className='p-0 w-8 h-8 rounded-full'/>
                );
            },
        },
        {
            title: 'Position',
            dataIndex: 'position',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone number',
            dataIndex: 'phoneNumber',
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
                        <FiTrash aria-disabled={removeLoading} onClick={() => {
                            handleDelete(record.id);
                        }}/>
                    </div>
                );
            },
        },
    ];
    return (
        <>

            <p className='text-xl font-bold pb-2 px-2'>Users</p>
            <div className="flex justify-end gap-2 items-center w-full pb-3">
          <span className='flex items-center w-fit'>
            <span onClick={() => setIsearch(!isearch)} className='hover:bg-zinc-100 p-2 rounded-md'>
          <GoSearch/>
            </span>
            <input type='text' placeholder='type to search...' name=''
                   className={`${isearch ? 'w-42' : 'w-0 hidden'} px-2 py-1 transition-all duration-1000`}></input>
          </span>
                <button type='button' onClick={() => {
                    setOpen(true)
                    setInput(true)
                    setIsNew(true);
                    setSideInfo({fullName: '', email: '', phoneNumber: '', position: '', background: '', userId: ''});
                }} className='bg-blue-500 rounded text-white px-2 py-1 w-fit'>New
                </button>
            </div>
            <Form component={false}>
                <Table
                    rowSelection={rowSelection}
                    bordered
                    dataSource={data}
                    columns={columns}
                    loading={loading}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                    rowKey={"id"}
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
                            setSideInfo({fullName: '', email: '', phoneNumber: '', position: '', background: '', userId: ''})
                            setOpen(false)
                            setInput(!Input)
                            setIsNew(false);
                        }}/>
                        <IoResizeOutline/>
                    </div>
                    <form action="" className='grid grid-cols-1 md:grid-cols-2 items-center gap-2'>
                        <p className='text-md font-bold px-2'>Full name</p>
                        {Input ? <input type="text" id="fullName" name="fullName" value={sideInfo.fullName || ""}
                                        onChange={handleInput} placeholder='Enter full name'
                                        className='w-full p-2 rounded border focus:outline-none'></input> :
                            <p className='hover:bg-zinc-100 py-1 px-2 rounded'
                               onClick={() => setInput(true)}>{sideInfo?.fullName}</p>}
                        <p className='text-md font-bold px-2'>Position</p>
                        {Input ? <input type="text" id="position" name="position" value={sideInfo.position || ""}
                                        onChange={handleInput} placeholder='Enter position'
                                        className='w-full p-2 rounded border focus:outline-none'></input> :
                            <p className='hover:bg-zinc-100 py-1 px-2 rounded'
                               onClick={() => setInput(true)}>{sideInfo?.position}</p>}
                        <p className='text-md font-bold px-2'>Email</p>
                        {Input ? <input type="email" id="email" name="email" value={sideInfo.email || ""}
                                        onChange={handleInput} placeholder='Enter email'
                                        className='w-full p-2 rounded border focus:outline-none'></input> :
                            <p className='hover:bg-zinc-100 py-1 px-2 rounded'
                               onClick={() => setInput(true)}>{sideInfo?.email}</p>}
                        <p className='text-md font-bold px-2'>Phone number</p>
                        {Input ?
                            <input type="tel" id="phoneNumber" name="phoneNumber" value={sideInfo.phoneNumber || ""}
                                   onChange={handleInput} placeholder='Enter phone number'
                                   className='w-full p-2 rounded border focus:outline-none'></input> :
                            <p className='hover:bg-zinc-100 py-1 px-2 rounded'
                               onClick={() => setInput(true)}>{sideInfo?.phoneNumber}</p>}

                        <p className='text-md font-bold px-2'>Background</p>
                        {Input ?
                            <textarea id="background" name="background" value={sideInfo.background || ""}
                                   onChange={handleInput} placeholder='Enter background'
                                   className='w-full h-52 p-2 rounded border focus:outline-none'></textarea> :
                            <p className='hover:bg-zinc-100 py-1 px-2 rounded'
                               onClick={() => setInput(true)}>{sideInfo?.background}</p>}

                        <p className='text-md font-bold px-2'>Image</p>
                        {Input ? <input type="file" name="file" onInput={handleSelectFile}/> : null}
                        <button type='button' disabled={registerLoading || updateLoading} onClick={(e) => {
                            // updateRow(sideInfo.key);
                            handleSubmit(e);
                        }}
                                className='p-2 rounded bg-blue-400 w-fit text-white col-span-full'>save
                        </button>
                    </form>
                </div>
            </Drawer>

        </>

    );
};

export default UsersPage;
