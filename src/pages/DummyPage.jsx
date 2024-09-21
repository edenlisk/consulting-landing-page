import { SidenavCard } from "../components/Card"
import { aboutNavs } from "../components/NavbarList"

const DummyPage=()=>{
return(

    <div className="h-[100svh] w-full bg-zinc-400 flex-col flex">

{aboutNavs.map(({id,title,link})=>{
            return(

            <SidenavCard key={id}
            title={title}
            link={link}
            />
            )
          })}
    </div>
)

}

export default DummyPage