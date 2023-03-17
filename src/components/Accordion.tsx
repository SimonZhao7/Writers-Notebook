import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export const Accordion = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <article className='bg-white w-full rounded-[10px] border-box transition-["height"] duration-100 ease-out'>
            <div
                className='max-h-[100px]  px-10 py-8 flex justify-between items-center'
                onClick={() => setOpen(!open)}
            >
                <p>1. Placeholder</p>
                {open ? <BsChevronUp size={25} /> : <BsChevronDown size={25} />}
            </div>
            <div
                className={`h-${
                    open ? '60' : '0'
                } transition-all duration-200 px-10 overflow-hidden`}
            >
                <p>Placeholder Details</p>
            </div>
        </article>
    )
}
