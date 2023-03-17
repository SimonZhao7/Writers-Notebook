import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export const Accordion = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <article className='bg-white w-full rounded-md xl:rounded-[10px] border-box transition-[height] duration-200 ease-out'>
            <div
                className='h-12 px-6 flex justify-between items-center sm:h-16 sm:px-10 2xl:h-20'
                onClick={() => setOpen(!open)}
            >
                <p className='accordion-text'>1. Placeholder</p>
                {open ? <BsChevronUp size={25} /> : <BsChevronDown size={25} />}
            </div>
            <div
                className={`${open ? 'max-h-screen' : 'max-h-0'} h-[300px] transition-all duration-200 px-6 overflow-hidden sm:px-10`}
            >
                <p className='accordion-text'>Placeholder Details</p>
            </div>
        </article>
    )
}
