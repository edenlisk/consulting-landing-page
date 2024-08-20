import {Link, useLocation, useNavigate} from "react-router-dom";
import {BiSolidTimeFive} from "react-icons/bi";
import {IoAddSharp} from "react-icons/io5";
import {GoChevronRight} from "react-icons/go";

export const NewsCard = ({img, title, link, date}) => {

    return (

        <li className=" md:w-[90%] col-span-4 h-fit bg-white shadow-lg rounded-md relative">
            <img
                src={img}
                alt="people in office"
                className="w-full h-[220px] object-cover bg-center"
            />
            <div
                className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
                <IoAddSharp className="text-5xl"/>
            </div>
            <div className="flex flex-col gap-2 p-2 ">
                <div className="w-[50px] p-[1.8px] rounded-full bg-red-500"></div>
                <Link to={link} className="py-2 text-xl font-semibold hover:text-orange-400">
                    {title}
                </Link>
                <span className="flex items-center w-full gap-2">
        <BiSolidTimeFive className="text-orange-400"/>
        <p>{date}</p>
      </span>
            </div>
        </li>
    )
};
export const ServiceCard = ({img, title, link, description, handleModal}) => {

    return (

        <li className=" md:w-[90%] col-span-4 flex flex-col gap-4 h-fit bg-white rounded-md relative">
            <img
                src={img}
                alt="people in office"
                className="w-full h-[220px] object-cover bg-center"
            />
            <div
                className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
                <IoAddSharp className="text-5xl"/>
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-[50px] p-[1.8px]  bg-red-500"></div>
                <p className="py-2 text-xl font-semibold ">
                    {title}
                </p>
                <p>{description}</p>
                <Link onClick={handleModal} className="flex items-center w-full gap-1 font-semibold">
                    <p>Read more</p>
                    <GoChevronRight/>
                </Link>
            </div>
        </li>
    )
};
export const ProfileCard = ({img, title, name, link, description, handleModal}) => {

    return (

        <li className=" md:w-[90%] col-span-4 flex flex-col gap-4 h-fit bg-white rounded-md relative">
            <img
                src={img}
                alt="people in office"
                className="w-full h-[190px] object-cover rounded-tr-3xl rounded-bl-3xl bg-center"

            />
            <div className="flex flex-col gap-1 ">
                <p className="text-xl">
                    {name}
                </p>
                <p className="pb-2 text-md text-[#9c9c9c]">{title}</p>
                <p className="text-md">{description}</p>
                <Link to={""} onClick={handleModal}
                      className="flex items-center w-full gap-1 pt-2 font-semibold hover:text-orange-600">
                    <p>View Profile</p>
                    <GoChevronRight/>
                </Link>
            </div>
        </li>
    )
};
export const TimelineCard = ({title, year, description}) => {

    return (

        <li className="grid gap-1 md:grid-cols-12 ">
            <p className="col-span-1 text-2xl font-bold">{year}</p>
            <div className="hidden w-0 h-full col-span-1 md:block vertical-line-with-dots"></div>
            <div className="flex flex-col col-span-10 gap-4">
                <p className="text-xl font-bold">{title}</p>
                <p className="pb-10">
                    {description}
                </p>
            </div>
        </li>
    )
};
export const SidenavCard = ({title, link}) => {
    const {pathname} = useLocation();
    const arr = pathname.split('/').filter((x) => x).pop().replace(/-/g, ' ');
    console.log(arr)
    return (

        <Link to={`/services/${link}`}
              className={` p-4 hover:border-l-4 border-orange-500 bg-zinc-200 ${(arr === title.toLowerCase()) ? "border-l-4 border-orange-500" : ""}`}>
            {title}
        </Link>
    )
};
