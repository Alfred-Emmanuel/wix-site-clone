'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

function Navbar() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(prevMenu => !prevMenu);
    }

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [menu])

    return (
        <nav className=' relative z-20 flex items-center justify-between md:border-b border-white mx-5 md:mx-20 md:pt-10 md:pb-5 py-5'>
            <h1 className='text-lg font-medium'>NextGen Business Innovators</h1>
            <div className='md:flex items-center gap-8 hidden '>
                <Link href={"/"} className='text-white hover:text-[#effe8a]'>Home</Link>
                <Link href={"/blog"} className='text-white hover:text-[#effe8a]'>Blog</Link>
                <Link href={"/bookings"} className='text-white hover:text-[#effe8a]'>Book Online</Link>
                <Link href={"/pricing"} className='text-white hover:text-[#effe8a]'>Plans & Pricing</Link>
                <div className='relative text-white hover:text-[#effe8a]'>
                    <input
                        placeholder='Search...' 
                        type='text'
                        className='bg-transparent text-white placeholder:text-white outline-none pl-7'
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 absolute top-1">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 md:hidden">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
            <div className={`${menu ? 'block' : 'hidden'} md:hidden overflow-hidden absolute top-0 left-0 bg-black text-white w-full h-screen`}>
                <div className='flex flex-col items-center pt-28 relative h-full w-full'>
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 absolute top-10 right-3">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    <div className='relative text-white hover:text-[#f1e75b] self-start pl-5'>
                        <input
                            placeholder='Search...' 
                            type='text'
                            className=' text-wrap bg-transparent text-white placeholder:text-white outline-none pl-7 text-lg font-medium placeholder:font-medium'
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 absolute top-1">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='flex mt-10 flex-col items-center justify-center gap-5'>
                        <Link href={"/"} className='font-semibold text-2xl'>Home</Link>
                        <Link href={"/blog"} className='font-semibold text-2xl'>Blog</Link>
                        <Link href={"/bookings"} className='font-semibold text-2xl'>Book Online</Link>
                        <Link href={"/pricing"} className='font-semibold text-2xl'>Plans & Pricing</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar