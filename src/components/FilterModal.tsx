import React, { useState, useEffect, useRef, SetStateAction } from 'react'
// Interfaces
import { Category, Note } from '../types'
// Icons
import { BsPlus, BsCheck } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
// API
import { fetchCategories, fetchNotes } from '../api/noteQueries'


interface Props {
    currentFilters: Category[]
    closeModal: React.Dispatch<SetStateAction<boolean>>
    setNotes: React.Dispatch<SetStateAction<Note[]>>
    setFilters: React.Dispatch<SetStateAction<Category[]>>
}

export const FilterModal = ({
    currentFilters,
    closeModal,
    setNotes,
    setFilters,
}: Props): JSX.Element => {
    const [selected, setSelected] = useState<Category[]>(currentFilters)
    const [categories, setCategories] = useState<Category[]>([])
    const ref = useRef<HTMLDivElement>(null)

    const handleClearAll = async () => {
        setNotes(await fetchNotes([]))
        setFilters([])
        closeModal(false)
    }

    const filterNotes = async () => {
        const ids = selected.map((c: Category) => c.id)
        const result = await fetchNotes(ids)
        setNotes(result)
        setFilters(selected)
        closeModal(false)
    }

    const handleFilterUpdate = async (c: Category) => {
        if (inFilters(c)) {
            setSelected(selected.filter((val: Category) => val.id !== c.id))
        } else {
            setSelected([...selected, c])
        }
    }

    const inFilters = (c: Category) =>
        selected.filter((v: Category) => v.id === c.id).length > 0

    useEffect(() => {
        fetchCategories().then((data: Category[]) => setCategories(data))
    }, [])

    return (
        <div
            className='absolute w-full p-6 h-full bg-black bg-opacity-20 flex items-center justify-center sm:p-10 z-10'
            onClick={(e) => {
                if (!ref.current?.contains(e.target as Node)) {
                    closeModal(false)
                }
            }}
        >
            <section
                className='rounded-[5px] bg-white px-10 py-10 w-full sm:px-14 md:px-20 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl max-h-[600px] overflow-y-scroll'
                ref={ref}
            >
                <div className='flex justify-between items-center'>
                    <p className='mb-2 font-medium text-xl 2xl:text-2xl'>
                        Filters
                    </p>
                    <p
                        className='hover:text-gray-500 cursor-pointer hover:scale-105 transition-transform'
                        onClick={handleClearAll}
                    >
                        Clear All
                    </p>
                </div>
                <section className='flex flex-wrap gap-2'>
                    {selected.map((c: Category, index: number) => (
                        <div
                            key={index}
                            className='py-1 px-4 bg-l-red text-sm rounded-full text-white group relative'
                        >
                            <div
                                className={`absolute hidden group-hover:block bg-d-red p-[2px] rounded-full float-right right-[-5px] top-[-5px]`}
                                onClick={() => handleFilterUpdate(c)}
                            >
                                <RxCross2 size={12} />
                            </div>
                            <p className='2xl:text-lg'>{c.name}</p>
                        </div>
                    ))}
                </section>
                <br />
                <section className='max-h-[250px] overflow-y-scroll flex flex-col space-y-3'>
                    {categories.map((c: Category, index: number) => (
                        <div
                            key={index}
                            className={`w-full flex justify-between items-center py-[6px] px-3 border border-c-gray 2xl:px-6 2xl:py-4 ${
                                inFilters(c) && 'bg-c-gray transition-colors'
                            }`}
                        >
                            <h3 className='2xl:text-xl'>{c.name}</h3>
                            <button
                                className='bg-l-red text-white rounded-full hover:scale-110 transition-transform'
                                onClick={() => handleFilterUpdate(c)}
                            >
                                {inFilters(c) ? (
                                    <BsCheck className='w-[25px] h-[25px] 2xl:w-[35px] 2xl:h-[35px]' />
                                ) : (
                                    <BsPlus className='w-[25px] h-[25px] 2xl:w-[35px] 2xl:h-[35px]' />
                                )}
                            </button>
                        </div>
                    ))}
                </section>
                <br />
                <div className='flex justify-center items-center'>
                    <button
                        className='bg-l-red text-white py-2 flex items-center justify-center w-60 rounded-full hover:scale-110 transition-transform 2xl:text-xl 2xl:w-80 2xl:py-3'
                        onClick={filterNotes}
                    >
                        Filter
                    </button>
                </div>
            </section>
        </div>
    )
}
