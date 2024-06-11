import { FaRegFilePdf } from "react-icons/fa6";
import { IoCall,IoAddSharp } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";


const Team = () => {
  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-2 p-6 lg:px-32">
      {/* FIRST GRID */}
      <ul className=" lg:col-span-9 grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-12 ">
        <p className="col-span-full pb-1 text-5xl font-bold">Our team grid</p>
          <li className=" md:w-[90%] col-span-4 flex flex-col gap-4 h-fit bg-white rounded-md relative">
            <img
              src="./src/images/blackimage.webp"
              alt="people in office"
              className="w-full h-[220px] object-cover bg-center"
            />
            <div className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
            <IoAddSharp className="text-5xl"/>
            </div>
            <div className="p-2 flex flex-col gap-2">
              <div className="w-[50px] p-[1.8px] rounded-full bg-red-500"></div>
              <p className=" font-semibold text-xl py-2">
              Turnaround Consulting
              </p>
              <p>Companies dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success.</p>
              <span className="w-full flex gap-1 items-center font-semibold">
                <p>read more</p>
                <GoChevronRight />
              </span>
            </div>
          </li>
          <li className=" md:w-[90%] col-span-4 flex flex-col gap-4 h-fit bg-white rounded-md relative">
            <img
              src="./src/images/blackimage.webp"
              alt="people in office"
              className="w-full h-[220px] object-cover bg-center"
            />
            <div className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
            <IoAddSharp className="text-5xl"/>
            </div>
            <div className="p-2 flex flex-col gap-2">
              <div className="w-[50px] p-[1.8px] rounded-full bg-red-500"></div>
              <p className=" font-semibold text-xl py-2">
              Turnaround Consulting
              </p>
              <p>Companies dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success.</p>
              <span className="w-full flex gap-1 items-center font-semibold">
                <p>read more</p>
                <GoChevronRight />
              </span>
            </div>
          </li>
          <li className=" md:w-[90%] col-span-4 flex flex-col gap-4 h-fit bg-white rounded-md relative">
            <img
              src="./src/images/blackimage.webp"
              alt="people in office"
              className="w-full h-[220px] object-cover bg-center"
            />
            <div className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
            <IoAddSharp className="text-5xl"/>
            </div>
            <div className="p-2 flex flex-col gap-2">
              <div className="w-[50px] p-[1.8px] rounded-full bg-red-500"></div>
              <p className=" font-semibold text-xl py-2">
              Turnaround Consulting
              </p>
              <p>Companies dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success.</p>
              <span className="w-full flex gap-1 items-center font-semibold">
                <p>read more</p>
                <GoChevronRight />
              </span>
            </div>
          </li>
          <li className=" md:w-[90%] col-span-4 flex flex-col gap-4 h-fit bg-white rounded-md relative">
            <img
              src="./src/images/blackimage.webp"
              alt="people in office"
              className="w-full h-[220px] object-cover bg-center"
            />
            <div className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
            <IoAddSharp className="text-5xl"/>
            </div>
            <div className="p-2 flex flex-col gap-2">
              <div className="w-[50px] p-[1.8px] rounded-full bg-red-500"></div>
              <p className=" font-semibold text-xl py-2">
              Turnaround Consulting
              </p>
              <p>Companies dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success.</p>
              <span className="w-full flex gap-1 items-center font-semibold">
                <p>read more</p>
                <GoChevronRight />
              </span>
            </div>
          </li>
          <li className=" md:w-[90%] col-span-4 flex flex-col gap-4 h-fit bg-white rounded-md relative">
            <img
              src="./src/images/blackimage.webp"
              alt="people in office"
              className="w-full h-[220px] object-cover bg-center"
            />
            <div className="absolute m-0 w-full h-[220px] overflow-hidden text-white bg-black/50 flex items-center justify-center top-0 opacity-0 transition-all duration-300 hover:opacity-100">
            <IoAddSharp className="text-5xl"/>
            </div>
            <div className="p-2 flex flex-col gap-2">
              <div className="w-[50px] p-[1.8px] rounded-full bg-red-500"></div>
              <p className=" font-semibold text-xl py-2">
              Turnaround Consulting
              </p>
              <p>Companies dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success.</p>
              <span className="w-full flex gap-1 items-center font-semibold">
                <p>read more</p>
                <GoChevronRight />
              </span>
            </div>
          </li>
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

        <div className="p-4 bg-blue-950 text-white">
          <p className="font-bold">How can we help you?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eum
            qui et.
          </p>
          <button className="p-2 bg-white flex items-center gap-2 rounded-sm text-black hover:text-white hover:bg-orange-500">
            <IoCall />
            <p>contacts</p>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Team;
