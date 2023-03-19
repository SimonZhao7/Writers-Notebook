import { useState } from 'react'
// Icons
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
// Util
import { decodeCategory } from '../util/categoryEnoder'


interface AccordionProps {
    number: number
    short: string
    quote: string
    categoryId: string
    detail: string
}

export const Accordion = ({
    number,
    short,
    quote,
    detail,
    categoryId,
}: AccordionProps): JSX.Element => {
    const [open, setOpen] = useState(false)
    return (
        <article className='bg-white w-full rounded-mdborder-box  xl:rounded-[5px] hover:scale-105 transition-transform'>
            <div
                className={`h-12 px-6 flex justify-between items-center rounded-[5px] hover:bg-gray-100 transition-colors ${open && 'rounded-bl-none rounded-br-none'} sm:h-16 sm:px-10 2xl:h-20`}
                onClick={() => setOpen(!open)}
            >
                <li className='accordion-text gap-2 font-medium flex items-center sm:gap-4'>
                    <span>{number}.</span>
                    <span>{short}</span>
                </li>
                {open ? <BsChevronUp size={25} /> : <BsChevronDown size={25} />}
            </div>
            <div
                className={`${
                    open ? 'max-h-screen overflow-y-scroll' : 'max-h-0'
                } transition-["height"] duration-300 ease-out px-6 overflow-hidden sm:px-10`}
            >
                <section className='flex justify-end items-center pt-5 pb-3'>
                    <div className='bg-l-red text-white px-4 py-1 rounded-full text-sm'>
                        {decodeCategory(categoryId)}
                    </div>
                </section>
                <p className='font-medium'>{short}</p>
                <br />
                <p>{detail}</p>
                <br />
                <h3 className='font-bold my-3'>Quote:</h3>
                <p className='mb-10'>{quote}</p>
            </div>
        </article>
    )
}