import React from 'react'
import { IoFilter } from 'react-icons/io5'
import { Accordion } from './components/Accordion'

function App() {
    return (
        <main className='min-h-full bg-n-red font-sans'>
            <header className='bg-d-red w-full h-[60px]'></header>
            <section className='mx-auto max-w-6xl'>
                <section className='w-full flex justify-center p-24'>
                    <h1 className='text-6xl text-white font-medium'>
                        Writer's Notebook
                    </h1>
                </section>
                <section className='w-full'>
                    <div className='flex justify-end items-center'>
                        <button className='bg-white px-5 py-[10px] rounded-full flex items-center gap-3 text-sm'>
                            <IoFilter size={20} />
                            Filter
                        </button>
                    </div>
                    <br />
                    <section>
                        <Accordion />
                    </section>
                </section>
            </section>
        </main>
    )
}

export default App
