'use client'
import Image from 'next/image'
import { useState } from 'react'
import bookings1 from '../assets/bookings_1.png'
import bookings2 from '../assets/bookings_2.png'
import bookings3 from '../assets/bookings_3.png'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import CustomPaymentForm from '../components/Payment'
import WrapperContainer from '../components/WrapperContainer'
import InViewWrapper from '../utils/InViewWrapper'

const BOOKING_DATA = [
    {
        id: 1,
        img: bookings1,
        name: 'Business Consulting Services',
        duration: '1 hr',
        price: 180,
    },
    {
        id: 2,
        img: bookings2,
        name: 'Tech Product Consulting',
        duration: '45 mins',
        price: 150,
    },
    {
        id: 3,
        img: bookings3,
        name: 'Business Strategy Services',
        duration: '1 hr',
        price: 200,
    },
]

function Page() {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)

    const setBooking = (id: number) => {
        console.log(id)
        setIsOpen(true)
    }

    return (
        <div>
            <Navbar />
            <WrapperContainer>
                <div className="pt-10 md:pt-20 pb-10 flex items-center flex-col animate-fadeIn">
                    <h1 className="font-semibold md:text-4xl text-3xl capitalize text-center"> Our Services </h1>
                    <div className="grid grid-cols-3 items-center justify-center gap-5 mt-10">
                        {BOOKING_DATA.map((data) => (
                            <div key={data.id} className="w-full col-span-3 md:col-span-1 flex flex-col border border-gray-700 pb-7">
                                <Image
                                    src={data.img}
                                    alt="bookings"
                                    className="md:h-44 w-full hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                                />
                                <div className="px-5">
                                    <InViewWrapper className={`border-animate border-bottom py-5`} style={{ '--border-color': '#374151' }}>
                                        <div className="">
                                            <h1 className="text-xl font-semibold hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                                                {data.name}
                                            </h1>
                                        </div>
                                    </InViewWrapper>
                                    <div className="mt-7">
                                        <p>{data.duration}</p>
                                        <p className="mt-3">${data.price}</p>
                                        <button
                                            onClick={() => setBooking(data.id)}
                                            className="bg-primary text-black mt-5 px-3 py-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer w-full md:w-auto"
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </WrapperContainer>
            <Footer />

            <Modal title="Consultation Booking" isOpen={isOpen} onClose={closeModal}>
                <CustomPaymentForm />

                <InViewWrapper className="border-animate border-top py-5 mt-10" style={{ '--border-color': '#5e5e5e' }}>
                    <div className=" flex justify-end">
                        <button onClick={closeModal} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors mr-2">
                            Cancel
                        </button>
                    </div>
                </InViewWrapper>
            </Modal>
        </div>
    )
}

export default Page
