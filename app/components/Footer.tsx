import WrapperContainer from "./WrapperContainer"

function Footer() {
    return (
        <footer className='bg-white text-black pt-10 pb-16 md:pt-24 md:pb-20' >
            <WrapperContainer className="flex gap-8 md:gap-0 items-center flex-col md:flex-row">
                <div className='md:w-[60%] self-start '>
                    <h1 className='font-bold text-3xl w- md:w-[35%]'>NextGen Business Innovators</h1>
                </div>
                <div className='md:w-[40%]'>
                    <div>
                        <div className='flex flex-col gap-1'>
                            <p>
                                512-782-4534
                            </p>
                            <p>
                                info@nextgenbis.com
                            </p>
                        </div>
                        <h6 className='text-lg mt-7 text-gray-700 font-medium md:font-normal w-[70%] md:w-auto'>
                            11801 Domain Blvd, 3rd Floor, Austin, TX 78758
                        </h6>
                        <h1 className='font-bold text-4xl w-[80%] md:w-[90%] mt-20 md:mt-6'>Stay Informed. Join Our Newsletter.</h1>
                        <div className='mt-10 md:mt-20 md:w-[75%]'>
                            <p className='text-lg text-gray-700 md:text-[1rem]'>Enter Your Email Address *</p>
                            <form className='flex flex-col md:flex-row gap-4 md:gap-0 w-full md:justify-between md:items-end mt-2'>
                                <input type='text' className='border-b border-black outline-none px-2 py-3 w-[90%] md:w-[55%]' />
                                <button className='px-4 w-[90%] py-4 md:px-0 md:w-[40%] md:py-3 self-start bg-none border border-black rounded-full transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:border-none'> Subscribe </button>
                            </form>
                        </div>
                    </div>
                </div>
            </WrapperContainer>
        </footer>
    )
}

export default Footer