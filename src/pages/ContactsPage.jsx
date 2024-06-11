import { GoChevronRight } from "react-icons/go";

const Contacts=()=>{
return(

    <section className="w-full h-full flex flex-col gap-2 p-6 lg:px-32 bg-zinc-50">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full h-72 bg-blue-950"></div>
            <div className="w-full h-72 bg-blue-950"></div>
            <div className="w-full h-72 bg-blue-950"></div>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
            <div className="grid gap-2 md:col-span-8">
                <p className="font-bold text-xl">Feedback form</p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6">
                    <span className="w-full grid gap-y-6 col-span-1">
                    <input type="text" placeholder="First name*" className="w-ful p-3 shadow-sm "/>
                    <input type="email" placeholder="Email*" className="w-ful p-3 shadow-sm "/>
                    <input type="tel" placeholder="Phone*" className="w-ful p-3 shadow-sm "/>
                    </span>
                    <span className="w-full grid gap-y-6 col-span-1">
                        <textarea name="mesage" id="" className="w-full h-32"></textarea>
                        <button className="p-4 bg-orange-500 rounded-md w-fit h-fit text-white flex items-center gap-2">
                            SUBMIT
                        <GoChevronRight/>
                        </button>
                    </span>
                    
                </form>
            </div>
            <div className="grid gap-2 md:col-span-4">
            <p className="font-bold text-xl">Your contact</p>
            <ul className="flex flex-col gap-6">
                <li className="flex gap-3">
                    <img src="https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2021/08/avatar-berg.jpeg" alt="" className="h-20" />
                    <span className="flex flex-col gap-1">
                        <p className="font-semibold">Berg Devien</p>
                        <p className="font-semibold">Berg Devien</p>
                        <p>Email: <a href="">berg@consulting.wp</a></p>
                        <p>Email: <a href="">berg@consulting.wp</a></p>
                    </span>
                </li>
                <li className="flex gap-3">
                    <img src="https://consulting.stylemixthemes.com/valencia/wp-content/uploads/sites/53/2021/08/avatar-berg.jpeg" alt="" className="h-20" />
                    <span className="flex flex-col gap-1">
                        <p className="font-semibold">Berg Devien</p>
                        <p className="font-semibold">Berg Devien</p>
                        <p>Email: <a href="">berg@consulting.wp</a></p>
                        <p>Email: <a href="">berg@consulting.wp</a></p>
                    </span>
                </li>

            </ul>
            </div>
        </div>
    </section>
)

}
export default Contacts