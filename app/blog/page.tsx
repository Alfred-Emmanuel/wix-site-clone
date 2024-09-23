  import React from 'react'
  import Image from 'next/image'
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'
  import NewsImg from "../assets/news-img-1.jpg"
  import NewsImg2 from "../assets/news-image-2.jpg"
  import NewsImg3 from "../assets/news-img-3.jpg"

  function page() {
    const blogContent = [
      {
        id: 1,
        author: "techvanb",
        title: "Creating Tomorrow's Business Solutions Today",
        description: "In today's fast-paced business landscape, staying ahead of the curve is crucial for success. NextGen",
        image: NewsImg,
        date: "May 25",
        readTime: "2 min",
        views: 1,
        likes: 1,
        comments: 0,
      },
        {
        id: 2,
        author: "techvanb",
        title: "Unless the power of tech for business success",
        description: "In today's rapidly evolving business landscape, staying ahead of the competition requires a harmonious blend",
        image: NewsImg2,
        date: "May 25",
        readTime: "2 min",
        views: 1,
        likes: 1,
        comments: 0,
      },
      {
        id: 1,
        author: "techvanb",
        title: "Revolutionize your business with cutting edge tech solutions",
        description: "In today's fast-paced business landscape, staying ahead of the curve is essential to success. Embracing",
        image: NewsImg3,
        date: "May 25",
        readTime: "2 min",
        views: 1,
        likes: 1,
        comments: 0,
      },
    ]
    return (
      <div>
        <Navbar />
          <div className='px-5 mt-5 md:px-20 md:mt-10 md:pb-20 pb-10'>
            <div className='flex items-center justify-between md:px-52'>
              <div className='self-end'>All Posts</div>
              <button className='border border-primary text-primary bg-none outline-none px-4 py-2'>Log in / Sign up</button>
            </div>
            <div className='mt-10 md:px-52 flex flex-col gap-7'>
              {
                blogContent.map((content) => (
                  <div key={content.id} className='flex border border-gray-800 flex-col md:flex-row gap-3'>
                    <div className='w-full md:w-[45%] justify-self-start'>
                      <Image src={content.image} alt="image" placeholder="blur" className="md:h-96 md:w-full" />  
                    </div>
                    <div className='md:w-1/2 py-5 px-8'>
                      <div className='flex items-center gap-2 mb-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9 p-2 bg-gray-500 text-gray-300 rounded-full">
                          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                        <div className='flex flex-col items-center p-0 gap-0 m-0'>
                          <p className='self-start text-xs font-medium cursor-pointer'>{content.author}</p>
                          <span className='flex items-center gap-2 text-xs font-medium'>
                            <p>{content.date}</p>
                            <p>.</p>
                            <p>{content.readTime}</p>
                          </span>
                        </div>
                      </div>
                      <h1 className='mb-5 text-3xl font-semibold cursor-pointer hover:text-primary'>
                        {content.title}
                      </h1>
                      <h5 className='mb-12 text-lg w-[90%] cursor-pointer hover:text-primary'>{content.description}</h5>
                      <div className='border-t border-gray-500 py-5 flex items-center justify-between'>
                        <div className='flex gap-3'>
                          <p className='cursor-pointer'>
                            {content.views} views
                          </p>
                          <p className='cursor-pointer'>
                            {content.comments} comments
                          </p>
                        </div>
                        <div className='flex items-center gap-5'>
                          <div className="flex item-center justify-center gap-1 text-gray-600 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-500">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <p className="text-sm text-white"> {content.likes} </p>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 cursor-pointer">
                            <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        <Footer />
      </div>
    )
  }

  export default page