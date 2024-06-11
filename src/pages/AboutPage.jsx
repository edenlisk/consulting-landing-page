import { FaRegFilePdf } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const About = () => {
  return (
    <section className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-2 p-6 lg:px-32">
        {/* FIRST GRID */}
      <div className=" lg:col-span-9 flex flex-col gap-4 ">
        <img
          src="https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2020/08/slide-2-1.jpg"
          alt="team standing"
        />

        <div className="w-full">
          <ul className=" py-6">
            <li className="grid md:grid-cols-12 gap-1 ">
              <p className="font-bold col-span-1 text-2xl">2011</p>
              <div className="h-full  w-0 col-span-1 hidden md:block vertical-line-with-dots"></div>
              <div className="flex flex-col gap-4 col-span-10">
                <p className="font-bold text-xl">Start with a small service</p>
                <p className="pb-10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates ipsa odio necessitatibus officiis, adipisci tenetur
                  rem recusandae doloremque excepturi molestias?
                </p>
              </div>
            </li>
            <li className="grid md:grid-cols-12 gap-1 ">
              <p className="font-bold col-span-1 text-2xl">2018</p>
              <div className="h-full  w-0 col-span-1 hidden md:block vertical-line-with-dots"></div>
              <div className="flex flex-col gap-4 col-span-10">
                <p className="font-bold text-xl">Start with a small service</p>
                <p className="pb-10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates ipsa odio necessitatibus officiis, adipisci tenetur
                  rem recusandae doloremque excepturi molestias?
                </p>
              </div>
            </li>
            <li className="grid md:grid-cols-12 gap-1 ">
              <p className="font-bold col-span-1 text-2xl">2023</p>
              <div className="h-full  w-0 col-span-1 hidden md:block vertical-line-with-dots"></div>
              <div className="flex flex-col gap-4 col-span-10">
                <p className="font-bold text-xl">Start with a small service</p>
                <p className="pb-10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates ipsa odio necessitatibus officiis, adipisci tenetur
                  rem recusandae doloremque excepturi molestias?
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
            <p className="text-4xl font-bold">
            Company Overview
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam autem sunt dolorem porro sit iure, libero mollitia officiis maxime.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam autem sunt dolorem porro sit iure, libero mollitia officiis maxime.</p>
            <span className=" border-l-4 border-orange-500 bg-slate-200 p-6">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nesciunt nam amet possimus, quam, ut tenetur labore corporis ratione repellat repudiandae. Similique.</p>
            </span>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="space-y-2">
                <p className="text-lg font-bold">
                Our mission
                </p>
                <p>Our renowned coaching programs will allow you to:</p>
                <ul className=" list-disc pl-6">
                    <li>
                    Work fewer hours — and make more money
                    </li>
                    <li>
                    Attract and retain quality, high-paying customers
                    </li>
                    <li>
                    Manage your time so you’ll get more done in less time
                    </li>
                    <li>
                    Automate your business, so you can leave for days, weeks, or even months at a time
                    </li>
                </ul>
            </div>
            <div className="space-y-2">
                <p className="text-lg font-bold">
                How we work
                </p>
              <img src="" alt="" />
            </div>
        </div>
      </div>

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
export default About;
