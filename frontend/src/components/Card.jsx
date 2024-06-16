import { Link, useNavigate } from "react-router-dom";
import { BiSolidTimeFive } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";

 export const NewsCard=({img,title,link,date})=>{

return(

    <li className=" md:w-[90%] col-span-4 h-fit bg-white shadow-lg rounded-md relative">
    <img
      src={img}
      alt="people in office"
      className="w-full h-[220px] object-cover bg-center rounded-md"
    />
    <div className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
    <IoAddSharp className="text-5xl"/>
    </div>
    <div className="flex flex-col gap-2">
      <div className="w-[50px] p-[1.8px] rounded-full bg-red-500"></div>
      <Link to={link} className=" font-semibold text-xl py-2 hover:text-orange-400">
        {title}
      </Link>
      <span className="w-full flex gap-2 items-center">
        <BiSolidTimeFive className="text-orange-400" />
        <p>{date}</p>
      </span>
    </div>
  </li>
)
};
 export const ServiceCard=({img,title,link,description})=>{

return(

    <li className=" md:w-[90%] col-span-4 flex flex-col gap-4 h-fit bg-white rounded-md relative">
    <img
      src={img}
      alt="people in office"
      className="w-full h-[220px] object-cover bg-center"
    />
    <div className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
    <IoAddSharp className="text-5xl"/>
    </div>
    <div className="flex flex-col gap-2">
      <div className="w-[50px] p-[1.8px]  bg-red-500"></div>
      <p className=" font-semibold text-xl py-2">
      {title}
      </p>
      <p>{description}</p>
      <span className="w-full flex gap-1 items-center font-semibold">
        <p>Read more</p>
        <GoChevronRight />
      </span>
    </div>
  </li>
)
};
 export const ProfileCard=({img,title,name,link,description})=>{

return(

    <li className=" md:w-[90%] col-span-4 flex flex-col gap-4 h-fit bg-white rounded-md relative">
    <img
      src={img}
      alt="people in office"
      className="w-full h-[190px] object-cover bg-center"
    
    />
    <div className=" flex flex-col gap-1">
      <p className="text-xl">
      {name}
      </p>
      <p className="pb-2 text-md text-[#9c9c9c]">{title}</p>
      <p className="text-md">{description}</p>
      <Link to={""} className="w-full flex gap-1 items-center font-semibold pt-2 hover:text-orange-600" >
        <p>View Profile</p>
        <GoChevronRight />
      </Link>
    </div>
  </li>
)
};
