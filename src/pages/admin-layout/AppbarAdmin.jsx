import React, {useState, useRef, useEffect, useMemo, useContext} from "react";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { PiGlobeSimpleLight, PiCaretRightLight, PiUser, PiBellSimpleLight, PiEnvelopeLight, PiGearLight } from "react-icons/pi";
import { FiChevronsLeft, } from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import {Drawer, Space, Button, Badge, notification, message} from "antd";
import {BiSolidCalendarEdit} from "react-icons/bi";
import {IoChatbubbleEllipsesOutline} from "react-icons/io5";



const AppbarAdmin = ({ handleUserSubmenuMobile,userSubmenuMobile }) => {
    const [userMenu, setUserMenu] = useState(false);
    const navigate=useNavigate();
    const [userSubmenu, setUserSubmenu] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState(null);
    const [pendingEditRequests, setPendingEditRequests] = useState([]);

    const openNotification = ({message, description, type}) => {
        notification.open({
            message,
            description,
            placement: "topRight",
            type
        });
    };

    // useEffect(() => {
    //     socket.on("new-edit-request", data => {
    //         openNotification({message: "New Edit Request", description: `${data.username} has requested to edit incorrect data. Please review his/her request and make decision`, type: "info"});
    //     })

    //     socket.on("request-authorized", data => {
    //         openNotification({message: "Request Authorized", description: `Your edit request has been authorized. Please keep in mind that you have limited time to make changes`, type: "success"});
    //     })

    //     socket.on("request-rejected", data => {
    //         openNotification({message: "Request Rejected", description: `Your edit request has been rejected. Please contact admin for more information`, type: "warning"});
    //     })
    // }, [socket]);



    // useEffect(() => {
    //     if (true) {
    //         setUserId(true._id);
    //     }
    // }, [true])




    // useEffect(() => {
    //     if (isTokenError) {
    //         const { message: errorMessage } = tokenError.data;
    //         message.error(`${errorMessage}, please log in again!`);
    //         return navigate('/login');
    //     }
    // }, [isTokenError, tokenError]);

    // useEffect(() => {
    //     if (editRequestsSuccess || updateSuccess) {
    //         const { editRequests: editRequestsArray } = editRequests.data;
    //         setPendingEditRequests(editRequestsArray);
    //     }
    // }, [editRequestsSuccess, editRequests, updateSuccess]);

    // useEffect(() => {
    //     const verifyLoginToken = async () => {
    //         if (token) {
    //             const response = await verifyToken({ token });
    //             if (response.data?.data) {
    //                 const { userId: currentUserId } = response.data.data;
    //                 if (!currentUserId) {
    //                     message.error("Your session has ended. Please login again");
    //                     return navigate("/login");
    //                 }
    //             }
    //         }
    //     };

    //     verifyLoginToken();

    //     const intervalId = setInterval(() => {
    //         verifyLoginToken();
    //     }, 20000);

    //     return () => clearInterval(intervalId);
    // }, [token]);




    // useEffect(() => {
    //     if (userSuccess || updateSuccess) {
    //         const { user } = trueObj.data;
    //         if (user) {
    //             setUser(user);
    //         }
    //     }
    // }, [userId, userSuccess, trueObj, updateSuccess]);


    let modalRef = useRef();
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        setNotifications(data.data.notifications[0].notifications.slice(0,10));
    };


    // useEffect(() => {
    //     if (isSuccess || updateSuccess) {
    //         const { notifications: notificationsObj } = data.data;
    //         if (notificationsObj.length > 0) {
    //             const {notifications: notificationsArray} = notificationsObj[0];
    //             setNotifications(notificationsArray.slice(0,10));
    //         }
    //     }
    // }, [isSuccess, data, updateSuccess]);


    const handleClickOutside = (event) => {
        if (!modalRef.current ||!modalRef.current.contains(event.target)) {
            setUserSubmenu(false);
        }
      };

    const readMessage = async (notificationId) => {
        await updateNotificationStatus({userId, notificationId});
        // if (updateSuccess) {
        //     const newNotification = notifications.find(item => item._id  === notificationId);
        //     if (newNotification) {
        //         setNotifications(prevState => ([...prevState, {...newNotification, read: true}]));
        //     }
        //     const updateNotifications = notifications.map(notification => {
        //         if (notification._id === notificationId) {
        //             return {...notification, read: true};
        //
        //         }
        //     })
        //
        // }
    }

    const navigateToLink = (link) => {
        setOpen(false);
        navigate(link);
    }
  
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
  
    }, []);

    return (
        <>
            {/* App bar */}
            <div className="  w-full fixed flex z-10 bg-white p-2 items-center justify-between h-16 px-10 border-b">
                <div className={`logo ml-12 dark:text-white  transform ease-in-out duration-300 flex-none h-full flex items-center justify-center`} >
                    DEFAULT
                </div>


                <div className="hidden relative flex-none h-full text-center sm:flex items-center justify-center">
                   { true?<ul className="flex items-center justify-evenly gap-4 ">
                        {/*<li className=" relative p-2 w-[36px] h-[36px] bg-slate-100 flex items-center justify-center rounded-lg">*/}
                        {/*    <PiGlobeSimpleLight className="text-xl text-gray-500" />*/}

                        {/*</li>*/}
                        <li onClick={() => navigate('/chat')} title={"Chats"} className=" relative p-2 w-[36px] h-[36px] bg-slate-100 flex items-center justify-center rounded-lg">
                            <IoChatbubbleEllipsesOutline className="text-xl text-gray-500" />
                            {/*<span className="absolute w-[20px] h-[20px] rounded-full bg-slate-800 -top-1 -right-1 border-2 border-white text-white flex items-center justify-center text-xs">4</span>*/}
                        </li>
                       {true && (<li title="Edit Requests" className=" relative p-2 w-[36px] h-[36px] bg-slate-100 flex items-center justify-center rounded-lg">
                            <BiSolidCalendarEdit  onClick={() => navigateToLink("/edit-requests")} className="text-xl text-gray-500" />
                            <span className="absolute w-[20px] h-[20px] rounded-full bg-slate-800 -top-1 -right-1 border-2 border-white text-white flex items-center justify-center text-xs">{pendingEditRequests?.length}</span>
                        </li>)}
                       {true && (
                           <li onClick={() => navigate('/settings')} title={"Settings"} className=" relative p-2 w-[36px] h-[36px] bg-slate-100 flex items-center justify-center rounded-lg">
                               <PiGearLight className="text-xl text-gray-500" />
                           </li>
                       )}
                       <li title={"Notifications"} className=" relative p-2 w-[36px] h-[36px] bg-slate-100 flex items-center justify-center rounded-lg">
                            <PiBellSimpleLight className="text-xl text-gray-500" onClick={showDrawer}/>
                            <span className="absolute w-[20px] h-[20px] rounded-full bg-slate-800 -top-1 -right-1 border-2 border-white text-white flex items-center justify-center text-xs">{notifications?.reduce((acc, item) => {
                                if (!item.read) {
                                    return acc + 1;
                                }
                                return acc;
                            }, 0)}</span>
                        </li>


                        <li className="flex space-x-3 items-center ">
                            <span className="flex-none flex justify-center">
                                <div className="w-8 h-8 flex ">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile" className="shadow rounded-full object-cover" />
                                </div>
                            </span>

                            <p className="hidden md:block text-sm md:text-md text-black dark:text-white">{true?.name}</p>
                            <PiCaretRightLight  className={`duration-500 ${userSubmenu && 'rotate-90'}`} onClick={()=>{setUserSubmenu((prev)=>!prev)}} />
                        </li>
                        <div className={`absolute right-0 top-[65px] bg-white w-[162px] rounded-br rounded-bl flex flex-col shadow-xl ${userSubmenu ? 'block' : 'hidden'} }`} ref={modalRef}>

                            <div className=" flex gap-2 items-center p-2">
                                <img className=" w-[36px] h-[36px] object-cover rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user profile" />

                                <span className=" text-left">
                                    <p className="text-sm">{true?.name}</p>
                                    <p className="text-sm">{true?.role}</p>
                                </span>
                            </div>
                            <div className="w-full bg-gray-500 h-[0.5px] divider"></div>

                            {/* <ul className=" list-none">
                                <li className="flex gap-2 items-center hover:bg-slate-100 py-2 pl-2" onClick={()=>navigate(`/user/${profile._id}`)}>
                                    <PiUser />
                                    <p className="text-[14px]">My profile</p>
                                </li>
                                <li className="flex gap-2 items-center hover:bg-slate-100 py-2 pl-2">
                                    <PiUser />
                                    <p className="text-[14px]">Settings</p>
                                </li>
                            </ul>
                            <div className="w-full bg-gray-500 h-[0.5px] divider"></div>
                            <ul className="list-none">
                                <li className="flex gap-2 items-center hover:bg-slate-100 py-2 pl-2">
                                    <PiUser />
                                    <p className="text-[14px]">My profile</p>
                                </li>
                            </ul> */}
                        </div>
                    </ul>:null}
                </div>

                <div className="relative sm:hidden">
                    <BsThreeDots className=" text-xl" onClick={handleUserSubmenuMobile} />
                    <div className={`absolute -right-9 top-[45px] bg-white w-[162px] rounded-br rounded-bl flex flex-col shadow-xl ${userSubmenuMobile ? 'block ' : 'hidden'} }`}>

                        <div className=" flex gap-2 items-center p-2">
                            <img className=" w-[36px] h-[36px] object-cover rounded-full" src={user?.profilePicture?.url} alt="user profile" />

                            <span className=" text-left">
                            <p className="text-sm">{user?.name}</p>
                                    <p className="text-sm">{user?.role}</p>
                            </span>
                        </div>
                        <div className="w-full bg-gray-500 h-[0.5px] divider"></div>

                        {/* <ul className=" list-none">
                            <li className="flex gap-2 items-center hover:bg-slate-100 py-2 pl-2">
                                <PiUser />
                                <p className="text-[14px]">My profile</p>
                            </li>
                            <li className="flex gap-2 items-center hover:bg-slate-100 py-2 pl-2">
                                <PiUser />
                                <p className="text-[14px]">Settings</p>
                            </li>
                        </ul>
                        <div className="w-full bg-gray-500 h-[0.5px] divider"></div>
                        <ul className="list-none">
                            <li className="flex gap-2 items-center hover:bg-slate-100 py-2 pl-2">
                                <PiUser />
                                <p className="text-[14px]">My profile</p>
                            </li>
                        </ul> */}
                    </div>
                </div>

                <Drawer
                    title="Notifications"
                    placement="right"
                    width={560}
                    onClose={onClose}
                    open={open}
                    // extra={
                    //     <Space>
                    //         <Button onClick={onClose}>Cancel</Button>
                    //         <Button type="default" title="" onClick={onClose}>
                    //             OK
                    //         </Button>
                    //     </Space>
                    // }
                >
                    <Space className="flex flex-col items-start">
                        {notifications.length > 0 && notifications.map((notification, index) => {
                            if (notification.message.includes("**")) {
                                return (
                                    <Badge onClick={() => readMessage(notification._id)} className="p-3 border rounded-[4px] bg-purple-200  md:flex gap-2 items-center" key={index} dot={!notification.read} offset={[7,7]}>
                                        <span>{`${notification.message.split("**")[0]} ${notification.message.split("**")[2].trim()}`}</span>
                                        <button className="p-2 bg-gray-400 border rounded-[4px] mt-2 text-white" onClick={() => navigateToLink(notification.message.split("**")[1])}>Link</button>
                                    </Badge>
                                )
                            }
                            return (
                                <Badge onClick={() => readMessage(notification._id)} className="p-3 border rounded-[4px] bg-purple-200" key={index} dot={!notification.read} offset={[7,7]} overflowCount={10}>
                                    <span>{notification.message}</span>
                                </Badge>
                            )
                        }
                        )}
                        {notifications.length >= 10 && notifications.length < data.data.notifications[0].notifications.length && <button className="bg-blue-400 p-2 border rounded-[4px] text-white" onClick={() => setNotifications(prevState => prevState.concat(data.data.notifications[0].notifications.slice(10)))}>Load more</button>}
                    </Space>
                </Drawer>


            </div>
        </>
    )

}
export default AppbarAdmin;