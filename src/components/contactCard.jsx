import React from 'react'
import { LuPhone } from "react-icons/lu";

function ContactCard({icon,title,description}) {
  return (
    <div className='flex flex-row items-center w-full gap-x-4'>
        <div className='p-3 bg-blue-900 rounded-lg'>
            {icon}
        </div>
        <span className='text-[#03274a]'>
        <p className='text-base font-semibold'>{title}:</p>
        <p >{description}</p>
        </span>
    </div>
  )
}

export default ContactCard