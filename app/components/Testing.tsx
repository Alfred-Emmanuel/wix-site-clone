import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from 'next/image'
import NewsImage from '../assets/news-img-1.jpg'
import InViewWrapper from '../utils/InViewWrapper'

function Testing() {
    return (
        <div>
            <Navbar />
            <div className="px-5 mt-8 mb-16 md:mt-24 md:w-[65%] mx-auto">
                <div className="flex justify-between items-center">
                    <h1>All posts</h1>
                    <button className="border border-primary text-primary bg-none outline-none px-4 py-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-black">
                        Log in / Sign up
                    </button>
                </div>
                <div className="border border-gray-500 mt-10 md:p-10 ">
                    <div className="flex gap-2 items-center p-2 mb-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-9 p-2 bg-gray-500 text-gray-300 rounded-full"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <div className="flex items-center p-0 gap-2 m-0">
                            <p className="self-start text-sm font-medium cursor-pointer">techvanb</p>
                            <span className="flex items-center gap-2 text-xs font-medium">
                                <p>May 20, 2024</p>
                                <p>.</p>
                                <p>2 min</p>
                            </span>
                        </div>
                    </div>
                    <h1 className="md:mt-8 text-2xl font-bold"> Creating Tomorrow's Business Solutions Today</h1>
                    <p className="mt-5 md:mt-10 leading-7 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit error eaque voluptate maxime veritatis cupiditate illum ut et
                        incidunt, architecto dolor fugit aliquid, labore, non iusto! Odio soluta est dolore, aspernatur placeat eos, corrupti optio
                        ipsum, consequatur inventore non ab provident omnis fuga facilis quaerat dignissimos dolorem nihil minima tempore.
                    </p>
                    <Image src={NewsImage} alt="news" className="h-[80vh] w-full my-5" />
                    <p className="mt-5 md:mt-10 leading-7 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos ex unde non maxime aliquid, ipsa voluptatibus iure
                        sunt soluta in consequatur ut explicabo autem fuga deserunt adipisci impedit. Iste fuga sunt explicabo fugit quaerat deleniti.
                        Quam, incidunt repudiandae minima tempore voluptates quo, necessitatibus accusamus tenetur a nisi asperiores laboriosam dolore
                        ea numquam suscipit! Doloribus aliquam pariatur autem rerum, nisi eius doloremque libero voluptate soluta sit, suscipit
                        voluptas a beatae facere saepe minima dolore dignissimos natus qui voluptatem totam, debitis dolores. Saepe et similique quas.
                        Iusto quam rerum quos expedita praesentium, dolores consequatur dignissimos voluptas nulla soluta exercitationem dolorum
                        ratione, laborum a voluptatibus. Libero, maxime a? A, delectus nulla iste rerum neque inventore praesentium soluta sint.
                        Alias, quasi sequi enim omnis aut soluta nobis recusandae rem! Vitae sint, eveniet reprehenderit recusandae reiciendis atque
                        quod officia quo harum eos quia totam. Ut aut libero saepe nostrum, porro nobis optio explicabo quod.
                    </p>
                    <InViewWrapper className={`border-animate border-top  mt-7`} style={{ '--border-color': '#6B7280' }}>
                        <div className="flex items-center gap-4 py-5">
                            <p>Icon1</p>
                            <p>Icon2</p>
                            <p>Icon3</p>
                            <p>Icon4</p>
                        </div>
                    </InViewWrapper>
                    <InViewWrapper className={`border-animate border-top py-5`} style={{ '--border-color': '#6B7280' }}>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-3 text-xs">
                                <p className="cursor-pointer">3 views</p>
                                <p className="cursor-pointer">0 comments</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex item-center justify-center gap-1 text-gray-600 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-5 text-red-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                        />
                                    </svg>
                                    <p className="text-sm text-white"> </p>
                                </div>
                            </div>
                        </div>
                    </InViewWrapper>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Testing
