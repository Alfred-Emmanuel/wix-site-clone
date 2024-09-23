import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import bookings1 from "../assets/bookings_1.png"
import bookings2 from "../assets/bookings_2.png"
import bookings3 from "../assets/bookings_3.png"

function page() {
  return (
    <div>
        <Navbar />
        <div className='pt-10 md:pt-20 md:px-20 px-5 pb-10 flex items-center flex-col'>
            <h1 className='font-semibold md:text-4xl text-3xl capitalize text-center'> Our Services </h1>
            <div className='w-[90%] md:w-auto flex flex-col md:flex-row items-center justify-center gap-5 md:px-52 mt-10'>
                <div className='w-full md:w-1/3 flex flex-col border border-gray-700 pb-7'>
                    <Image src={bookings1} alt='bookings' className='md:h-44 w-full hover:opacity-80 transition-opacity duration-300 cursor-pointer' />
                    <div className='px-5'>    
                        <div className='border-b border-gray-700 py-5'>
                            <h1 className='text-xl font-semibold hover:opacity-80 transition-opacity duration-300 cursor-pointer'>Business Consulting Services</h1>
                        </div>
                        <div className='mt-7'>
                            <p>1 hr</p>
                            <p className='mt-3'>$180</p>
                            <button className='bg-primary text-black mt-5 px-3 py-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer w-full md:w-auto'>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/3 flex flex-col border border-gray-700 pb-7'>
                    <Image src={bookings2} alt='bookings' className='md:h-44 w-full hover:opacity-80 transition-opacity duration-300 cursor-pointer' />
                    <div className='px-5'>    
                        <div className='border-b border-gray-700 py-8'>
                            <h1 className='text-xl font-semibold hover:opacity-80 transition-opacity duration-300 cursor-pointer'>Tech Product Consulting</h1>
                        </div>
                        <div className='mt-7'>
                            <p>45 mins</p>
                            <p className='mt-3'>$150</p>
                            <button className='bg-primary text-black mt-5 px-3 py-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer w-full md:w-auto'>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/3 flex flex-col border border-gray-700 pb-7'>
                    <Image src={bookings3} alt='bookings' className='md:h-44 w-full hover:opacity-80 transition-opacity duration-300 cursor-pointer' />
                    <div className='px-5'>    
                        <div className='border-b border-gray-700 py-5'>
                            <h1 className='text-xl font-semibold hover:opacity-80 transition-opacity duration-300 cursor-pointer'>Business Strategy Consulting</h1>
                        </div>
                        <div className='mt-7'>
                            <p>1 hr</p>
                            <p className='mt-3'>$200</p>
                            <button className='bg-primary text-black mt-5 px-3 py-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer w-full md:w-auto'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default page