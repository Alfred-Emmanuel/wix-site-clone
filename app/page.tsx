import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import HeroBg1 from "./assets/pc-bg-1.jpg"
import HeroBg2 from "./assets/pc-bg-2.jpg"
import NewsImg from "./assets/news-img-1.jpg"
import NewsImg2 from "./assets/news-image-2.jpg"
import NewsImg3 from "./assets/news-img-3.jpg"
import { VideoComponent } from "./components/VideoComponents";
import InViewWrapper from "./utils/InViewWrapper";

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
      <div className="h-52 md:h-auto px-5 mt-8 md:mt-24 flex items-center justify-center flex-col animate-fadeIn">
        <h1 className="capitalize text-5xl md:text-7xl md:w-[50%] font-semibold text-center animate-fadeIn">
          Revolutionize your Business
        </h1>
        <h4 className="text-center text-xl md:text-2xl mt-3 font-semibold w-[80%] animate-fadeIn">
          Technology consulting services
        </h4>
      </div>
      <div className="w-full overflow-hidden flex flex-col md:flex-row items-center justify-end relative mt-10 px-5 md:px-0 md:pr-20 h-screen">
        <Image
          src={HeroBg1}
          placeholder="blur"
          alt="background image"
          className="self-center md:absolute inset-0 left-40 md:z-10 w-full md:w-[40%] h-[50%] md:h-[80%] animate-fadeIn"
        />
        <Image
          src={HeroBg2}
          placeholder="blur"
          alt="background image"
          className="md:align-end w-full md:w-[55%] h-full animate-fadeIn"
        />
      </div>
      <div className="animate-fadeIn bg-[#effe8a] w-full mt-28 pt-8 md:pt-16 pb-10 px-5 md:px-20">
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
                  <InViewWrapper
                    className={`border-animate top pt-4 pb-2`}
                    style={{ '--border-color': '#94A3B8' }}
                  >
                    <div className="flex items-center justify-between">
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
                  </InViewWrapper>
                </div>
              </div>
            ))
          }  
        </div>
      </div>
      <div className="py-10 bg-white px-5 md:px-20">
        <h1 className="font-semibold md:text-6xl text-3xl capitalize text-black">Consulting Services</h1>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5 text-black">
          <div className="w-full md:w-1/3 px-8 md:border border-black py-7">
            <h1 className="text-2xl md:text-xl text-gray-700">Business Solutions Consulting</h1>
            <p className="mt-5 md:hidden text-[1.05rem]">Empower your business with efficient and productive solutions.</p>
            <InViewWrapper 
              className="mt-7 py-4 border-animate top"
              style={{ '--border-color': 'black' }}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <p className="md:hidden text-[1.05rem] mb-2">1hr</p>
                  <p className="text-[1.05rem]">$180</p>
                </div>
                <h5 className="border text-center md:text-left border-black md:self-start px-4 py-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer">Book Now</h5>
              </div>
            </InViewWrapper>
          </div>
          <div className="w-full md:w-1/3 px-8 md:border border-black py-7">
            <h1 className="text-2xl md:text-xl text-gray-700">Tech Product Consulting</h1>
            <p className="mt-5 md:hidden text-[1.05rem]">Empower your tech products with cutting-edge insights.</p>
            <InViewWrapper 
              className="mt-7 py-4 border-animate top"
              style={{ '--border-color': 'black' }}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <p className="md:hidden text-[1.05rem] mb-2">1hr</p>
                  <p className="text-[1.05rem]">$180</p>
                </div>
                <h5 className="border text-center md:text-left border-black md:self-start px-4 py-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer">Book Now</h5>
              </div>
            </InViewWrapper>
          </div>
          <div className="w-full md:w-1/3 px-8 md:border border-black py-7">
            <h1 className="text-2xl md:text-xl text-gray-700">Business Strategy Consulting</h1>
            <p className="mt-5 md:hidden text-[1.05rem]">Transform your business landscape with strategic consulting.</p>
            <InViewWrapper 
              className="mt-7 py-4 border-animate top"
              style={{ '--border-color': 'black' }}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <p className="md:hidden text-[1.05rem] mb-2">1hr</p>
                  <p className="text-[1.05rem]">$180</p>
                </div>
                <h5 className="border text-center md:text-left border-black md:self-start px-4 py-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer">Book Now</h5>
              </div>
            </InViewWrapper>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-20 md:pt-12 md:pb-28 px-5 md:px-20">
        <h1 className="font-semibold md:text-6xl text-3xl capitalize text-white w-[25%]">Hello. We&apos;re NextGen Business Innovators</h1>
        <div className="mt-5 md:mt-10 flex flex-col md:flex-row justify-center gap-4 md:gap-10">
          <div className=" w-[90%] md:w-[55%]">
            <VideoComponent />
          </div>
          <div className="flex flex-col gap-5 w-[90%] md:w-[40%]">
            <p className="md:w-[90%] text-balance text-[1.05rem] leading-7">We are a Austin-based Information Technology Consulting Agency that helps 
              businesses across industries thrive. Our team of experts specializes in 
              providing tech product, business, and IT consulting services to enhance operational 
              efficiency and market competitiveness. We offer customized solutions to address 
              your company&apos;s strengths, weaknesses, and opportunities. With our help, you can keep
               your business competitive, successful, and growth-oriented.
            </p>
            <button className="bg-[#effe8a] text-black self-start px-5 py-3 rounded-full border border-transparent transition-all duration-300 ease-in-out hover:bg-transparent hover:border-primary hover:text-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-20 md:pt-20 md:px-20 px-5 bg-[#effe8a] text-black">
        <h1 className="font-semibold md:text-6xl text-3xl capitalize">What Our Clients Say</h1>
        <div className="flex w-[90%] md:w-auto flex-col md:flex-row items-center justify-center gap-10 md:gap-48 mt-5 md:mt-12">
          <div className="flex justify-center gap-5 md:gap-7 flex-col w-[95%] md:w-auto">
            <p className="text-balance leading-7 text-xl md:text-[1rem] ">
              “NextGen Business Innovators helped me take my business 
              to the next level with their innovative solutions. I highly
               recommend them to anyone looking to enhance their operational efficiency.”
            </p>
            <p className="text-gray-700 text-lg md:text-[1rem]">Robbie White</p>
          </div>
          <div className="flex justify-center gap-5 md:gap-7 flex-col w-[95%] md:w-auto">
            <p className="text-balance leading-7 text-xl md:text-[1rem]">             
              “I cannot recommend NextGen Business Innovators enough!
               Their team&apos;s expertise and professionalism are unmatched, 
               and their solutions have truly transformed my business.”
            </p>
            <p className="text-gray-700 text-lg md:text-[1rem]">Sandy Williams</p>
          </div>
          <div className="flex justify-center gap-5 md:gap-7 flex-col w-[95%] md:w-auto">
            <p className="text-balance leading-7 text-xl md:text-[1rem]">             
              “Working with NextGen Business Innovators was a game-changer
               for my business. Their insights and guidance helped me achieve
              my goals and stay ahead of the competition.”
            </p>
            <p className="text-gray-700 text-lg md:text-[1rem]">Quinn Davis</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
