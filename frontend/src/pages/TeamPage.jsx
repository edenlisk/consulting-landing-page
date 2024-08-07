import { FaRegFilePdf } from "react-icons/fa6";
import { IoCall,IoAddSharp } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import { ProfileCard } from "../components/Card";
import { profilesArray } from "../components/ArraysObj";
import {useQuery} from "@apollo/client";
import {GET_USERS} from "../api/graphql.js";
import {useEffect, useState} from "react";
import {message} from "antd";


const Team = () => {
  const { data, error } = useQuery(GET_USERS);
  const [teamProfiles, setTeamProfiles] = useState([]);
  useEffect(() => {
    if (data) {
      setTeamProfiles(data.team);
    }
    if (error) return message.error(error.message);
  }, [data, error]);

  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-2 p-6 lg:px-32">
      {/* FIRST GRID */}
      <ul className=" lg:col-span-9 grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-12 ">
        <p className="col-span-full pb-1 text-5xl font-bold">Our team grid</p>
        {
          teamProfiles.map(({id,name,position,background, profile })=>{
            return(
              <ProfileCard key={id}
              name={name}
              title={position}
              description={background}
              img={profile?.filePath || ''}/>
            )
          })
        }
      </ul>

      {/* SECOND GRID */}
      <div className="lg:col-span-3 hidden flex-col gap-10  md:flex">
        <ul className="grid grid-cols-1 gap-[1px]">
          <li className=" p-4 hover:border-l-2 border-orange-500 bg-zinc-200">
            <a href="">Company overview</a>
          </li>
          <li className=" p-4 hover:border-l-2 border-orange-500 bg-zinc-200">
            <a href="">Company overview</a>
          </li>
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
export default Team;
