import React, { useState, useEffect } from 'react'
// Components
import { FilterModal } from './components/FilterModal'
import Accordion from './components/Accordion'
// Interfaces
import { Category, Note } from './types'
// API
import { fetchNotes } from './api/noteQueries'
// Icons
import { IoFilter } from 'react-icons/io5'

function App() {
    const [notes, setNotes] = useState<Note[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [filters, setFilters] = useState<Category[]>([])

    useEffect(() => {
        fetchNotes([]).then((notes) => setNotes(notes))
    }, [])

    return (
        <main className='h-full bg-n-red font-sans overflow-y-scroll'>
            {isModalOpen && (
                <FilterModal
                    currentFilters={filters}
                    closeModal={setIsModalOpen}
                    setNotes={setNotes}
                    setFilters={setFilters}
                />
            )}
            <header className='bg-d-red w-full h-[20px] xl:h-[40px] 2xl:h-[60px]'></header>
            <section className='px-10 mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl'>
                <h1 className='text-4xl text-center text-white font-medium my-20 sm:my-24 sm:text-5xl xl:text-6xl 2xl:text-7xl'>
                    Writer's Notebook
                </h1>
                <section className='w-full'>
                    <div className='flex justify-end items-center'>
                        <button
                            className='bg-white px-5 py-[10px] rounded-full flex items-center justify-center gap-3 text-sm hover:scale-110 transition-transform 2xl:w-32 2xl:h-12'
                            onClick={() => setIsModalOpen(true)}
                        >
                            <IoFilter size={20} />
                            <p className='text-sm sm:text-[14px] 2xl:text-lg font-medium'>
                                Filter
                            </p>
                        </button>
                    </div>
                    <br />
                    <section>
                        {notes.map((note: Note, index: number) => (
                            <>
                                <Accordion
                                    key={index}
                                    number={index + 1}
                                    {...note}
                                />
                                <br />
                            </>
                        ))}
                    </section>
                </section>
            </section>
        </main>
    )
}

export default App
