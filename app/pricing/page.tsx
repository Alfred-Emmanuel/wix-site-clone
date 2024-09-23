import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

function page() {
  return (
    <div>
        <Navbar />
        <div className='h-[70vh] flex flex-col items-center justify-center animate-fadeIn'>
            <h1 className='text-2xl font-medium'>No plans available</h1>
            <p className='text-lg mt-5 text-balance w-[70%] md:w-auto'>
                Once there are plans available for purchase, you&apos;ll see them here.
            </p>
            <Link href={'/'} className='px-3 py-2 text-black bg-primary mt-8'>Back to Homepage</Link>
        </div>
        <Footer />
    </div>
  )
}

export default page