import { FaRegFilePdf } from "react-icons/fa6";
import { IoCall,IoAddSharp } from "react-icons/io5";
import { servicesArray } from "../components/ArraysObj";
import { ServiceCard, SidenavCard } from "../components/Card";
import { Link, useLocation } from "react-router-dom";
import { aboutNavs } from "../components/NavbarList";


const Services = () => {
  const path=useLocation()

  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-2 p-6 lg:px-32">
      {/* FIRST GRID */}
      <ul className=" lg:col-span-9 grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-12 ">
        <p className="col-span-full pb-1 text-5xl font-bold">Services</p>
        {
          servicesArray.map(({id,img,title,description})=>{
            return(
              <ServiceCard key={id}
              title={title}
              img={img}
              description={description}
              />
            )
          })
        }
      </ul>

      {/* SECOND GRID */}
      <div className="lg:col-span-3 hidden flex-col gap-10  md:flex">
        <ul className="grid grid-cols-1 gap-[1px]">
          {aboutNavs.map(({id,title,link})=>{
            return(

            <SidenavCard key={id}
            title={title}
            link={link}
            />
            )
          })}
        </ul>

        <div className=" rounded-md p-4 flex items-center gap-2 bg-orange-400 text-white hover:bg-blue-950">
          <FaRegFilePdf />
          <p>Company presentation</p>
        </div>

        <div className="p-4 bg-blue-950 text-white flex flex-col gap-3">
          <p className="font-bold">How can we help you?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eum
            qui et.
          </p>
          <button className="p-2 bg-white flex items-center gap-2 w-fit rounded-sm text-black hover:text-white hover:bg-orange-500">
            <IoCall />
            <p>contacts</p>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Services;
