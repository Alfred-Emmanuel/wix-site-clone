'use client';
import { useState } from 'react';
import InViewWrapper from '../utils/InViewWrapper';
import Modal from './Modal';
import CustomPaymentForm from './Payment';

const ConsultingBookingCard = () => {
    const bookingDetails = [
        {
            id: 1,
            name: 'Business Solutions Consulting',
            description: 'Empower your business with efficient and productive solutions.',
            price: 300,
            duration: '1hr',
        },
        {
            id: 2,
            name: 'Tech Product Consulting',
            description: 'Empower your tech products with cutting-edge insights.',
            price: 500,
            duration: '1hr',
        },
        {
            id: 3,
            name: 'Business Strategy Consulting',
            description: 'Transform your business landscape with strategic consulting.',
            price: 1000,
            duration: '1hr',
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [priceToPay, setPriceToPay] = useState<number>(0);

    const closeModal = () => setIsOpen(false);

    const setBooking = (price: number) => {
        setPriceToPay(price);
        setIsOpen(true);
    };

    return (
        <>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5 text-black">
                {bookingDetails.map((booking) => (
                    <div key={booking.id} className="w-full md:w-1/3 px-8 md:border border-black py-7">
                        <h1 className="text-2xl md:text-xl text-gray-700">{booking.name}</h1>
                        <p className="mt-5 md:hidden text-[1.05rem] border-b border-b-black pb-6 mb-5">{booking.description}</p>

                        <div className="flex flex-col gap-4">
                            <div>
                                <p className="md:hidden text-[1.05rem] mb-2">{booking.duration}</p>
                                <p className="text-[1.05rem]">${booking.price}</p>
                            </div>
                            <h5
                                onClick={() => setBooking(booking.price)}
                                className="border text-center md:text-left border-black md:self-start px-4 py-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer"
                            >
                                Book Now
                            </h5>
                        </div>
                    </div>
                ))}
            </div>

            <Modal title="Consultation Booking" isOpen={isOpen} onClose={closeModal}>
                <CustomPaymentForm amount={priceToPay} closeModal={closeModal} />

                <InViewWrapper className="border-animate border-top py-5 mt-10" style={{ '--border-color': '#5e5e5e' }}>
                    <div className=" flex justify-end">
                        <button onClick={closeModal} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors mr-2">
                            Cancel
                        </button>
                    </div>
                </InViewWrapper>
            </Modal>
        </>
    );
};

export default ConsultingBookingCard;
