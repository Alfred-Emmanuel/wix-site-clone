import Navbar from "./components/Navbar";
import Image from "next/image";
import HeroBg1 from "./assets/pc-bg-1.jpg"
import HeroBg2 from "./assets/pc-bg-2.jpg"
import NewsImg from "./assets/news-img-1.jpg"
import NewsImg2 from "./assets/news-image-2.jpg"
import NewsImg3 from "./assets/news-img-3.jpg"
import { VideoComponent } from "./components/VideoComponents";

export default function Home() {
const newsContent = [
  {
    id: 1,
    author: "techvanb",
    title: "Creating Tomorrow's Business Solutions Today",
    description: "In today's fast-paced business landscape, staying ahead of the curve is crucial for success. NextGen",
    image: NewsImg,
    views: 1,
    likes: 1
  },
  {
    id: 2,
    author: "techvanb",
    title: "Unless the power of tech for business success",
    description: "In today's rapidly evolving business landscape, staying ahead of the competition requires a harmonious blend",
    image: NewsImg2,
    views: 1,
    likes: 1
  },
  {
    id: 1,
    author: "techvanb",
    title: "Revolutionize your business with cutting edge tech solutions",
    description: "In today's fast-paced business landscape, staying ahead of the curve is essential to success. Embracing",
    image: NewsImg3,
    views: 1,
    likes: 1
  },
];

  return (
    <main>
      <Navbar />
      <div className="h-52 md:h-auto px-5 mt-8 md:mt-24 flex items-center justify-center flex-col">  
        <h1 className="capitalize text-5xl md:text-7xl md:w-[50%] font-semibold text-center">
          Revolutonize your Business
        </h1>
        <h4 className="text-center text-xl md:text-2xl mt-3 font-semibold w-[80%]">Technology consulting services</h4>
      </div>
      <div className="w-full overflow-hidden flex flex-col md:flex-row items-center justify-end relative mt-10 px-5 md:px-0 md:pr-20 h-screen">
          <Image src={HeroBg1} placeholder="blur" alt="background image" className="self-center md:absolute inset-0 left-40 md:z-10 w-full md:w-[40%] h-[50%] md:h-[80%]" />
          <Image src={HeroBg2} placeholder="blur" alt="background image" className=" md:align-end w-full md:w-[55%] h-full " />
      </div>
      <div className="bg-[#effe8a] w-full mt-28 pt-8 md:pt-16 pb-10 px-5 md:px-20">
        <h1 className="font-semibold md:text-6xl text-3xl capitalize text-black">Latest News</h1>
        <div className="md:mt-10 mt-5 flex flex-col md:flex-row items-center justify-center gap-5">
          {
            newsContent.map((news) => (
              <div className="border border-black w-full md:w-1/3" key={news.id}>
                <Image src={news.image} alt="image" placeholder="blur" className="md:h-auto h-64" />
                <div className="mt-6 px-6 pb-3">
                  <h5 className="text-gray-600 text-sm">{news.author}</h5>
                  <h1 className="capitalize mt-5 text-xl text-gray-600">{news.title}</h1>
                  <p className="mt-4 text-gray-700 mb-4"> {news.description} </p>
                  <div className="flex items-center justify-between pt-4 pb-2 border-t border-slate-400">
                    <div className="flex item-center justify-center gap-1 text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      <p className="text-sm ">{news.views}</p>
                    </div>
                    <div className="flex item-center justify-center gap-1 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                      <p className="text-sm"> {news.likes} </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }  
        </div>
      </div>
      <div className="py-10 bg-white px-5 md:px-20">
        <h1 className="font-semibold md:text-6xl text-3xl capitalize text-black">Consulting Services</h1>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5 text-black">
          <div className="w-[90%] md:w-1/3 px-8 md:border border-black py-7">
            <h1 className="text-xl text-gray-700">Business Solutions Consulting</h1>
            <div className="mt-7 border-t border-black py-4 flex flex-col gap-4">
              <div>
                <p className="md:hidden">1hr</p>
                <p>$180</p>
              </div>
              <h5 className="border border-black self-start px-4 py-2">Book Now</h5>
            </div>
          </div>
          <div className="w-[90%] md:w-1/3 px-8 md:border border-black py-7">
            <h1 className="text-xl text-gray-700">Tech Product Consulting</h1>
            <div className="mt-7 border-t border-black py-4 flex flex-col gap-4">
              <div>
                <p className="md:hidden">1hr</p>
                <p>$180</p>
              </div>
              <h5 className="border border-black self-start px-4 py-2">Book Now</h5>
            </div>
          </div>
          <div className="w-[90%] md:w-1/3 px-8 md:border border-black py-7">
            <h1 className="text-xl text-gray-700">Business Strategy Consulting</h1>
            <div className="mt-7 border-t border-black py-4 flex flex-col gap-4">
              <div>
                <p className="md:hidden">1hr</p>
                <p>$180</p>
              </div>
              <h5 className="border border-black self-start px-4 py-2">Book Now</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-12 md:pb-20 px-5 md:px-20">
        <h1 className="font-semibold md:text-6xl text-3xl capitalize text-white w-[25%]">Hello. We&apos;re NextGen Business Innovators</h1>
        <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
          <VideoComponent />
        </div>
      </div>
    </main>
  );
}
