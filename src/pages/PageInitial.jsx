import React from 'react'
import SendSpace from '../components/sendSpace/SendSpace'
import Search from '../components/search/Search'

const PageInitial = () => {
  return (
    <>
    <main className='h-screen w-screen'>
      <section className='flex h-full w-full'>
      <div className='bg-black w-96 h-full text-white text-3xl'>
        barra de tareas
      </div>
      <div className='h-full w-full bg-[#d9d9d9] flex justify-start items-end flex-col'>
        <Search/>
        <SendSpace/>
        queso
      </div>
    </section>
    </main>
    </>
  )
}

export default PageInitial