import React, { useState } from 'react';
import { Form, Input, InputNumber,Drawer, Popconfirm, Table, Typography,DatePicker,Button,Space } from 'antd';
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { IoResizeOutline,IoTimeOutline } from "react-icons/io5";
import { PiUsersFill } from "react-icons/pi";
import { FiEdit2 } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { FiTrash } from "react-icons/fi";


const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    title: `Bonds & Commodities ${i}`,
    description: `Bonds and commodities are much more stable than stocks and trades. We allow our clients to invest in the right bonds & commodities. ${i}`,
  });
};
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);   
  },};

const DataTable=()=>{const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const [open, setOpen] = useState(false);
    const [isearch, setIsearch] = useState(false);
    const [Input,setInput]=useState(false);
    const [sideInfo,setSideInfo]=useState({title:'',key:'',description:''})
    const [placement, setPlacement] = useState('right');

    const dateChange = (date, dateString) => {
      console.log(date, dateString);
    };

    const handleInput=(e)=>{
      setSideInfo((prev)=>({
        ...prev,[e.target.name]:e.target.value
      }));
      console.log(sideInfo)
    };
    
    const showDrawer = () => {
      setOpen(true);
    };
    const onChange = (e) => {
      setPlacement(e.target.value);
    };
    const onClose = () => {
      setOpen(false);
    };

    const cancel = () => {
      setEditingKey('');
    };
    const save = async (key) => {
      try {
        const row = await form.validateFields();
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
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

    const getData=(record)=>{
       if(record){
        setSideInfo(record)
        console.log(sideInfo)
       };
 
    };

    const updateRow=(id)=>{
        const indexToUpdate = originData.findIndex(item => id=== item.key );
        if (indexToUpdate !== -1) {
            // Create a shallow copy of the array using slice
            const newData = [...originData];
            newData[indexToUpdate] = { ...newData[indexToUpdate],title:sideInfo.title,description:sideInfo.description};
            setSideInfo(newData[indexToUpdate]);
            newData.splice(indexToUpdate,1,sideInfo);
            setData(newData);
            console.log(newData[indexToUpdate]);
            setInput(false);
            setSideInfo({title:'',key:'',description:''});
            setEditingKey('');
            setOpen(false);

       };
    };

    const columns = [
      {
        title: 'title',
        dataIndex: 'title',
      },
      {
        title: 'description',
        dataIndex: 'description',
        width:'70%'
      },
      {
        title: 'Action',
        dataIndex: 'action',
        render: (_, record) => {
          return ( 
            <div className='flex gap-2 items-center'>
            <FiEdit2  onClick={() =>{
              getData(record)
          setOpen(true)
         }}/>

<FiTrash />
            </div>
          );
        },
      },
    ];
    return (
        <>
       
        <p className='text-xl font-bold pb-2 px-2'>Posts</p>
        <div className="flex justify-end gap-2 items-center w-full pb-3">
          <span className='flex items-center w-fit'>
            <span onClick={()=>setIsearch(!isearch)} className='hover:bg-zinc-100 p-2 rounded-md'>
          <GoSearch />
            </span>
            <input type='text' placeholder='type to search...' name='' className={`${isearch?'w-42':'w-0 hidden'} px-2 py-1 transition-all duration-1000`}></input>
          </span>
          <button type='button' onClick={() => {
            setOpen(true)
            setInput(true)
            }} className='bg-blue-500 rounded text-white px-2 py-1 w-fit'>New</button>
        </div>
        <Form form={form} component={false}>
        <Table
        rowSelection={rowSelection}
          bordered
          dataSource={data}
          columns={columns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
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

        <HiOutlineChevronDoubleRight  onClick={() => {
          setSideInfo({title:'',key:'',description:''})
          setOpen(false)}}/>
        <IoResizeOutline />
        </div>

        {Input? <input type="text" id="fname" name="title" value={sideInfo.title ||""} onChange={handleInput} placeholder='Add title' className='w-full p-2 rounded border'></input>:<p className='text-2xl font-bold px-2' onClick={()=>setInput(true)}>{sideInfo?.title}</p>}
        <div className='flex gap-4 items-center text-md '>
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
        </div>
        <form action="" className='flex flex-col gap-2'>
            <p className='text-md font-bold px-2'>Description</p>
            <textarea name="description" id="" value={sideInfo.description ||""} onChange={handleInput}placeholder='where rich editor will get' className='w-full p-2 border rounded'></textarea>
            <button type='button' onClick={()=>updateRow(sideInfo.key)} className='p-2 rounded bg-blue-400 w-fit text-white'>save</button>
        </form>
        </div>
      </Drawer>

        </>
      
    );
  };

export default DataTable;
