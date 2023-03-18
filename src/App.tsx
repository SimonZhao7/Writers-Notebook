import React, { useState, useEffect } from 'react'
// Components
import { FilterModal } from './components/FilterModal'
import { Accordion } from './components/Accordion'
import { Typewriter } from 'react-simple-typewriter'
// Interfaces
import { Category, Note } from './types'
// API
import { fetchNotes } from './api/noteQueries'
// Icons
import { IoFilter } from 'react-icons/io5'
import { AiFillGithub } from 'react-icons/ai'

function App() {
    const [notes, setNotes] = useState<Note[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [filters, setFilters] = useState<Category[]>([])

    useEffect(() => {
        fetchNotes([]).then((notes) => setNotes(notes))
    }, [])

    return (
        <main className='h-full bg-n-red font-sans overflow-y-scroll pb-10'>
            {isModalOpen && (
                <FilterModal
                    currentFilters={filters}
                    closeModal={setIsModalOpen}
                    setNotes={setNotes}
                    setFilters={setFilters}
                />
            )}
            <header className='bg-d-red w-full h-[20px] px-3 flex items-center justify-end xl:h-[40px] 2xl:h-[60px]'>
                <a href='https://github.com/SimonZhao7/Writers-Notebook'>
                    <AiFillGithub
                        className='w-[30px] h-[30px] 2xl:w-[45px] 2xl:h-[45px] hover:cursor-pointer hover:scale-110 transition-transform'
                        color='white'
                    />
                </a>
            </header>
            <section className='px-10 mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl'>
                <div className='text-4xl h-9 text-center text-white font-medium my-20 sm:my-24 sm:text-5xl sm:h-12 xl:text-6xl xl:h-[60px] 2xl:text-7xl 2xl:h-[72px]'>
                    <Typewriter
                        words={[
                            "Writer's Notebook",
                            'Writing 1 W23',
                            'By: Simon Zhao',
                        ]}
                        loop={0}
                        cursor={true}
                        delaySpeed={2000}
                    />
                </div>

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
                    <section className='space-y-6'>
                        {notes.map((note: Note, index: number) => (
                            <Accordion
                                key={note.id}
                                number={index + 1}
                                {...note}
                            />
                        ))}
                    </section>
                </section>
            </section>
        </main>
    )
}

export default App
