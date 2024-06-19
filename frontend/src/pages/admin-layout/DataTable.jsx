import React, { useState } from 'react';
import { Form, Input, InputNumber,Drawer, Popconfirm, Table, Typography,DatePicker,Button,Space } from 'antd';
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { IoResizeOutline,IoTimeOutline } from "react-icons/io5";
import { PiUsersFill } from "react-icons/pi";
import { FiEdit2 } from "react-icons/fi";


const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    title: `Edward ${i}`,
    age: 32,
    description: `London Park no. ${i}`,
  });
};
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },};

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const DataTable=()=>{const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');
    const [open, setOpen] = useState(false);
    const [Input,SetInput]=useState(false);
    const [sideInfo,SetSideInfo]=useState({title:'',key:'',description:''})
    const [placement, setPlacement] = useState('right');

    const dateChange = (date, dateString) => {
      console.log(date, dateString);
    };

    const handleInput=(e)=>{
      // e.preventDefault();
      SetSideInfo((prev)=>({
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

    const isEditing = (record) => record.key === editingKey;
    const edit = (record) => {
      form.setFieldsValue({
        name: '',
        age: '',
        address: '',
        ...record,
      });
      setEditingKey(record.key);
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
    //    const {address,age,key,title}=record;
       if(record){
        SetSideInfo(record)
        console.log(sideInfo)
       };
 
    };

    const updateRow=(id)=>{
        const indexToUpdate = originData.findIndex(item => id=== item.key );
        if (indexToUpdate !== -1) {
            // Create a shallow copy of the array using slice
            const newData = [...originData];
            newData[indexToUpdate] = { ...newData[indexToUpdate],title:sideInfo.title,description:sideInfo.description};
            SetSideInfo(newData[indexToUpdate]);
            newData.splice(indexToUpdate,1,sideInfo);
            setData(newData);
            console.log(newData[indexToUpdate]);
            SetInput(false);
            SetSideInfo({title:'',key:'',description:''});
            setEditingKey('');
            setOpen(false);

       };
    };

    const columns = [
      {
        title: 'title',
        dataIndex: 'title',
        // width: '25%',
        // editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
        // width: '15%',
        // editable: true,
      },
      {
        title: 'description',
        dataIndex: 'description',
        // width: '40%',
        // editable: true,
      },
      {
        title: 'Action',
        dataIndex: 'action',
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record.key)}
                style={{
                  marginRight: 8,
                }}
              >
                Save
              </Typography.Link>
              <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            // <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            //   Edit
            // </Typography.Link>
          //   <Typography.Link disabled={editingKey !== ''} onClick={() =>{
          //       getData(record)
          //   setOpen(true)
          //  }}>
          //     Edit
          //   </Typography.Link>

            <FiEdit2  onClick={() =>{
              getData(record)
          setOpen(true)
         }}/>
          );
        },
      },
    ];
    const mergedColumns = columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
    return (
        <>

        <p className='text-xl font-bold pb-4 px-2'>Posts</p>
        <Form form={form} component={false}>
        <Table
        rowSelection={rowSelection}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>

      <Drawer
        // title=""
        // placement={placement}
        width={700}
        onClose={onClose}
        open={open}
        closable={false}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button type="primary" onClick={onClose}>
        //       OK
        //     </Button>
        //   </Space>
        // }
      >
        <div className="flex flex-col gap-4">

        <div className='flex gap-1 items-center'>

        <HiOutlineChevronDoubleRight  onClick={() => setOpen(false)}/>
        <IoResizeOutline />
        </div>

        {Input? <input type="text" id="fname" name="title" value={sideInfo.title ||""} onChange={handleInput} placeholder='Add title' className='w-full p-2 rounded border'></input>:<p className='text-2xl font-bold px-2' onClick={()=>SetInput(true)}>{sideInfo?.title}</p>}
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
