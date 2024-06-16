
import { BsTwitter } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer=()=>{

    return(
        <footer className="  w-full bg-blue-950 py-12 px-6 lg:px-28 text-white">
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col gap-12">
            <p className=" text-3xl font-bold">consulting</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur
              <br />
              adipisicing elit.
            </p>

            <div className=""></div>
            <div className="flex gap-4 items-center">
              <BsTwitter />
              <BsTwitter />
              <BsTwitter />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="pb-1 text-3xl font-bold">extra links</p>
            <ul className="grid grid-cols-2 gap-y-4">
              <li>
                <a href="/about-us">About us</a>
              </li>
              <li>
                <a href="/contact-us">Contacts</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/our-team">Team</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col gap-8">
            <p className="text-3xl font-bold">subscribe</p>
            <p>
              Sign up for Alerts, Special Offers, Education
              <br />
              and Updates
            </p>

            <div className="flex items-center w-full">
              <input
                className="p-2 rounded-sm lg:min-w-46"
                type="text"
                name=""
                id=""
                placeholder="enter-your email"
              />
              <div className="h-10 p-2 bg-orange-500 flex items-center rounded-sm">
                <FaArrowRightLong />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </footer>
    )
};

export default Footer;