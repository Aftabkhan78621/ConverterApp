import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto container px-6 md:px-40 shadow-lg h-16 fixed'>
    <div className='flex justify-between'>
        <h1 className='text-2xl cursor-pointer font-bold'>Word
            <span className='text-green-500 text-3xl'>To</span>PDF</h1>
        <h1 className='text-2xl cursor-pointer font-bold hover:scale-125 transition ease-in-out duration-300'>Home</h1>
    </div>
    </div>
    </>
  )
}

export default Navbar