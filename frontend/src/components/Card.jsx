import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiSolidTimeFive } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";

 export const NewsCard=({img,title,link,date})=>{

return(

    <li className=" md:w-[90%] col-span-4 h-fit bg-white shadow-lg rounded-md relative">
    <img
      src={img}
      alt="people in office"
      className="w-full h-[220px] object-cover bg-center"
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
      <Link className="w-full flex gap-1 items-center font-semibold">
        <p>Read more</p>
        <GoChevronRight />
      </Link>
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
 export const TimelineCard=({title,year,description})=>{

return(

    <li className="grid md:grid-cols-12 gap-1 ">
    <p className="font-bold col-span-1 text-2xl">{year}</p>
    <div className="h-full w-0 col-span-1 hidden md:block vertical-line-with-dots"></div>
    <div className="flex flex-col gap-4 col-span-10">
      <p className="font-bold text-xl">{title}</p>
      <p className="pb-10">
        {description}
      </p>
    </div>
  </li>
)
};
 export const SidenavCard=({title,link})=>{
    const path=useLocation();
    console.log(path)
return(

     <Link to={link} className={` p-4 hover:border-l-4 border-orange-500 bg-zinc-200 ${(path)?"border-orange-500":""}`}>
           {title}
          </Link>
)
};
