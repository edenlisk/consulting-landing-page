import React, {useEffect, useState} from 'react';
import {Form, Input, InputNumber, Drawer, Popconfirm, Table, message} from 'antd';
import {HiOutlineChevronDoubleRight} from "react-icons/hi";
import {IoResizeOutline, IoTimeOutline} from "react-icons/io5";
import {PiUsersFill} from "react-icons/pi";
import {FiEdit2} from "react-icons/fi";
import {GoSearch} from "react-icons/go";
import {FiTrash} from "react-icons/fi";
import {useMutation, useQuery} from "@apollo/client";
import {ADD_USER, GET_USERS} from "../../../api/graphql.js";
import {useNavigate} from "react-router-dom";


const originData = [];

for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        fullName: `Oliver Barkley ${i}`,
        phoneNumber: '250785478696',
        position: `CEO`,
        email: `barkley${i * 2}@gmail.com`,
        password: `barkley ${i}`,
        socials: '',
        // description: `Bonds and commodities are much more stable than stocks and trades. We allow our clients to invest in the right bonds & commodities. ${i}`,
    });
}
;
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const UsersPage = () => {

    const [register, { loading: registerLoading, error: registerError, data: userDataM }] = useMutation(ADD_USER);
    const { data: userDataQ, error } = useQuery(GET_USERS);
    const [data, setData] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    const [open, setOpen] = useState(false);
    const [isearch, setIsearch] = useState(false);
    const [Input, setInput] = useState(false);
    const [sideInfo, setSideInfo] = useState({
        fullName: '',
        // key: '',
        email: '',
        phoneNumber: '',
        position: '',
        password: '',
        background: ''
    })
    const [placement, setPlacement] = useState('right');
    const navigate = useNavigate();

    useEffect(() => {
        if (userDataQ) {
            console.log('[users]: ', userDataQ.team);
            setData(userDataQ.team);
        } else if (error) {
            message.error(error.message);
            // navigate('/admin/services');
        }
    }, [userDataQ, error, navigate]);

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
        console.log(sideInfo)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('[sideInfo]: ', sideInfo);
        await register({variables: { input: sideInfo }});
    }

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const cancel = () => {
        setEditingKey('');
    };
    const save = async (key) => {
        try {
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.id);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const getData = (record) => {
        if (record) {
            setSideInfo(record)
            console.log(sideInfo)
        }

    };

    const updateRow = (id) => {
        const indexToUpdate = originData.findIndex(item => id === item.id);
        if (indexToUpdate !== -1) {
            // Create a shallow copy of the array using slice
            const newData = [...originData];
            newData[indexToUpdate] = {
                ...newData[indexToUpdate],
                title: sideInfo.title,
                description: sideInfo.description
            };
            setSideInfo(newData[indexToUpdate]);
            newData.splice(indexToUpdate, 1, sideInfo);
            setData(newData);
            console.log(newData[indexToUpdate]);
            setInput(false);
            setSideInfo({title: '', key: '', description: ''});
            setEditingKey('');
            setOpen(false);

        }
    };

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
                        src={record.profile.filePath}
                        // src='https://www.vhv.rs/dpng/d/509-5097789_oic-provincial-statistics-officer-psa-maguindanao-profile-avatar.png'
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
                            getData(record)
                            setOpen(true)
                        }}/>

                        <FiTrash/>
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
                }} className='bg-blue-500 rounded text-white px-2 py-1 w-fit'>New
                </button>
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
                    key={"id"}
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
                            setSideInfo({fullName: '', key: '', email: '', phoneNumber: '', position: '', password: '', background: ''})
                            setOpen(false)
                            setInput(!Input)
                        }}/>
                        <IoResizeOutline/>
                    </div>

                    {/* {Input? <input type="text" id="fname" name="title" value={sideInfo.title ||""} onChange={handleInput} placeholder='Add title' className='w-full p-2 rounded border'></input>:<p className='text-2xl font-bold px-2' onClick={()=>setInput(true)}>{sideInfo?.title}</p>} */}
                    {/* <div className='flex gap-4 items-center text-md '>
            <span className='flex items-center gap-2 text-[#a6a5a3] p-1 px-2 rounded w-40 hover:bg-zinc-100'>
            <IoTimeOutline />
            Date created
            </span>
            {Input?<DatePicker onChange={dateChange} />:<span className='p-1 px-2 rounded w-full hover:bg-zinc-100'>Jan 18,2024 18:20</span>}
        </div>
        <div className='flex gap-4 items-center '>
            <span className='flex items-center gap-2 text-[#a6a5a3] p-1 px-2 rounded w-40 hover:bg-zinc-100'>
            <PiUsersFill />
            Published
            </span>
            <span className='p-1 px-2 rounded w-full hover:bg-zinc-100'>Jan 18,2024 18:20</span>
        </div> */}
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
                                   className='w-full p-2 rounded border focus:outline-none'></textarea> :
                            <p className='hover:bg-zinc-100 py-1 px-2 rounded'
                               onClick={() => setInput(true)}>{sideInfo?.background}</p>}

                        <p className='text-md font-bold px-2'>Password</p>
                        {Input ? <input type="password" id="password" name="password" value={sideInfo.password || ""}
                                        onChange={handleInput} placeholder='Add password'
                                        className='w-full p-2 rounded border focus:outline-none'></input> :
                            <p className='hover:bg-zinc-100 py-1 px-2 rounded'
                               onClick={() => setInput(true)}>{sideInfo?.password}</p>}
                        <button type='button' disabled={registerLoading} onClick={(e) => {
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
