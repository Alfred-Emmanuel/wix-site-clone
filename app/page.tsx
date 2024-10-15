import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import NewsImg2 from './assets/news-image-2.jpg';
import NewsImg from './assets/news-img-1.jpg';
import NewsImg3 from './assets/news-img-3.jpg';
import HeroBg1 from './assets/pc-bg-1.png';
import HeroBg2 from './assets/pc-bg-2.jpg';
import { Blog } from './blog/interface';
import ConsultingBookingCard from './components/ConsultingBookingCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { VideoComponent } from './components/VideoComponents';
import WrapperContainer from './components/WrapperContainer';
import { BLOGS_COLLECTION_NAME, db } from './lib/firebase';

export default async function Home() {
    const blogContent: Blog[] = [
        {
            id: '1',
            title: "Creating Tomorrow's Business Solutions Today",
            introductory: "In today's fast-paced business landscape, staying ahead of the curve is crucial for success. NextGen",
            content:
                ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim natus est accusantium unde deleniti autem, labore quo, doloremque itaque ad a sit amet reprehenderit. Eligendi molestiae necessitatibus tempora at doloremque officia pariatur corporis iste cum, ipsa consequuntur, aperiam obcaecati eius? Dolores explicabo laboriosam provident officiis debitis magnam, tempora aperiam odit ab ex magni iusto minus, atque architecto! Non ipsam quasi amet doloribus corrupti voluptatem neque id nesciunt ad eum. Consequatur temporibus dolore voluptas, delectus dolorem, qui quas fuga voluptate quod iste vel impedit. Dicta repellat aspernatur quasi ipsum doloribus blanditiis mollitia ab nisi, voluptatem nam, optio voluptatum veritatis, fugit ex?',
            image: NewsImg,
            timestamp: '2022-10-01T10:00:00Z',
            views: 1,
            likes: 1,
            comments: [],
        },
        {
            id: '2',
            title: 'Unless the power of tech for business success',
            introductory: "In today's rapidly evolving business landscape, staying ahead of the competition requires a harmonious blend",
            content:
                ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim natus est accusantium unde deleniti autem, labore quo, doloremque itaque ad a sit amet reprehenderit. Eligendi molestiae necessitatibus tempora at doloremque officia pariatur corporis iste cum, ipsa consequuntur, aperiam obcaecati eius? Dolores explicabo laboriosam provident officiis debitis magnam, tempora aperiam odit ab ex magni iusto minus, atque architecto! Non ipsam quasi amet doloribus corrupti voluptatem neque id nesciunt ad eum. Consequatur temporibus dolore voluptas, delectus dolorem, qui quas fuga voluptate quod iste vel impedit. Dicta repellat aspernatur quasi ipsum doloribus blanditiis mollitia ab nisi, voluptatem nam, optio voluptatum veritatis, fugit ex?',
            image: NewsImg2,
            timestamp: '2022-10-01T10:00:00Z',
            views: 1,
            likes: 1,
            comments: [],
        },
        {
            id: '1',
            title: 'Revolutionize your business with cutting edge tech solutions',
            introductory: "In today's fast-paced business landscape, staying ahead of the curve is essential to success. Embracing",
            content:
                ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim natus est accusantium unde deleniti autem, labore quo, doloremque itaque ad a sit amet reprehenderit. Eligendi molestiae necessitatibus tempora at doloremque officia pariatur corporis iste cum, ipsa consequuntur, aperiam obcaecati eius? Dolores explicabo laboriosam provident officiis debitis magnam, tempora aperiam odit ab ex magni iusto minus, atque architecto! Non ipsam quasi amet doloribus corrupti voluptatem neque id nesciunt ad eum. Consequatur temporibus dolore voluptas, delectus dolorem, qui quas fuga voluptate quod iste vel impedit. Dicta repellat aspernatur quasi ipsum doloribus blanditiis mollitia ab nisi, voluptatem nam, optio voluptatum veritatis, fugit ex?',
            image: NewsImg3,
            timestamp: '2022-10-01T10:00:00Z',
            views: 1,
            likes: 1,
            comments: [],
        },
    ];

    const getBlogs = async () => {
        const blogsCollection = collection(db, BLOGS_COLLECTION_NAME);
        const querySnapshot = await getDocs(blogsCollection);
        const blogData: Blog[] = [];

        querySnapshot.forEach((doc) => {
            blogData.push({ ...doc.data(), id: doc.id } as Blog);
        });

        return blogData;
    };
    const items = await getBlogs();

    const blogs = items && items.length > 0 ? items : blogContent;

    // handleUserId();

    return (
        <main>
            <Navbar />

            <div className="h-52 md:h-auto px-5 mt-8 md:mt-24 flex items-center justify-center flex-col animate-fadeIn">
                <h1 className="capitalize text-5xl md:text-[80px] md:w-[70%] lg:w-[60%] font-bold text-center animate-fadeIn">
                    Revolutionize your Business
                </h1>

                <h4 className="text-center text-[22px] leading-6 md:text-2xl mt-3 font-normal w-[80%] animate-fadeIn">
                    Technology Consulting Services
                </h4>
            </div>

            <WrapperContainer className="h-[90vh] max-h-[1500px] my-auto">
                <section className="w-full overflow-hidden flex flex-col md:flex-row items-center justify-end relative mt-10 md:pr-20 ">
                    <Image
                        src={HeroBg1}
                        placeholder="blur"
                        alt="background image"
                        className="self-center  md:absolute inset-0 left-[5%] md:z-10 w-full md:w-[45%] object-contain h-[50%] md:h-[70%] animate-fadeIn"
                    />
                    <Image
                        src={HeroBg2}
                        placeholder="blur"
                        alt="background image"
                        className="md:align-end w-full md:w-[60%] h-[80%] animate-fadeIn"
                    />
                </section>
            </WrapperContainer>

            <section className="animate-fadeIn bg-[#effe8a] w-full mt-28 pt-8 md:pt-16 pb-16">
                <WrapperContainer>
                    <h1 className="font-semibold md:text-6xl text-3xl capitalize text-black">Latest News</h1>
                    <div className="md:mt-10 mt-5 flex flex-col md:flex-row  justify-center gap-6">
                        {blogs.slice(0, 3).map((news) => (
                            <Link href={`/blog/${news.id}`} className="border cursor-pointer border-black w-full md:w-1/3" key={news.id}>
                                <Image src={news.image} alt="image" width={200} height={200} className="md:h-auto h-64 w-full object-cover" />
                                <div className="mt-6 px-6 pb-3 text-black">
                                    <h5 className="text-gray-600 text-sm">techvanb</h5>
                                    <h1 className="capitalize mt-5 lg:leading-8 font-extralight min-h-12 text-base lg:text-[23px]">{news.title}</h1>

                                    <p
                                        className="lg:mt-4 mt-3 text-sm lg:text-[15px] lg:leading-6 "
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {news.introductory}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-t-[#94A3B8] pt-5 mt-5">
                                        <div className="flex item-center justify-center gap-1 text-black">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                                />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            <p className="text-sm ">{news.views}</p>
                                        </div>
                                        <div className="flex item-center justify-center gap-1 text-gray-600">
                                            <p className="text-sm"> {news.likes} </p>
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
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </WrapperContainer>
            </section>

            <section className="py-10 bg-white">
                <WrapperContainer>
                    <h1 className="font-semibold md:text-6xl text-3xl capitalize text-black">Consulting Services</h1>
                    <ConsultingBookingCard />
                </WrapperContainer>
            </section>

            <section className="pt-10 pb-20 md:pt-12 md:pb-28">
                <WrapperContainer>
                    <h1 className="font-semibold md:text-[64px] md:leading-[4rem] text-3xl capitalize text-white w-[25%]">
                        Hello. We&apos;re NextGen Business Innovators
                    </h1>
                    <div className="mt-5 md:mt-10 flex flex-col md:flex-row justify-center gap-4 md:gap-10">
                        <div className=" w-[90%] md:w-[55%]">
                            <VideoComponent />
                        </div>
                        <div className="flex flex-col gap-5 w-[90%] md:w-[40%]">
                            <p className="md:w-[90%] text-balance text-[1.05rem] sm:text-sm lg:text-[1.05rem] leading-7">
                                We are a Austin-based Information Technology Consulting Agency that helps businesses across industries thrive. Our
                                team of experts specializes in providing tech product, business, and IT consulting services to enhance operational
                                efficiency and market competitiveness. We offer customized solutions to address your company&apos;s strengths,
                                weaknesses, and opportunities. With our help, you can keep your business competitive, successful, and growth-oriented.
                            </p>
                            <Link href={"/about-us"} className="bg-[#effe8a] text-black self-start px-5 py-3 rounded-full border border-transparent transition-all duration-300 ease-in-out hover:bg-transparent hover:border-primary hover:text-primary">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </WrapperContainer>
            </section>

            <section className="pt-10 pb-20 md:pt-20 bg-[#effe8a] text-black">
                <WrapperContainer>
                    <h1 className="font-semibold md:text-6xl text-3xl capitalize">What Our Clients Say</h1>
                    <div className="flex w-[90%] md:w-auto flex-col md:flex-row items-center justify-center gap-10 lg:gap-48 mt-5 md:mt-12">
                        <div className="flex justify-center gap-5 md:gap-7 flex-col w-[95%] md:w-auto">
                            <p className="text-balance leading-7 text-[1.05rem] md:text-[1rem] ">
                                “NextGen Business Innovators helped me take my business to the next level with their innovative solutions. I highly
                                recommend them to anyone looking to enhance their operational efficiency.”
                            </p>
                            <p className=" text-base md:text-[1rem]">Robbie White</p>
                        </div>
                        <div className="flex justify-center gap-5 md:gap-7 flex-col w-[95%] md:w-auto">
                            <p className="text-balance leading-7 text-[1.05rem] md:text-[1rem]">
                                “I cannot recommend NextGen Business Innovators enough! Their team&apos;s expertise and professionalism are unmatched,
                                and their solutions have truly transformed my business.”
                            </p>
                            <p className=" text-base md:text-[1rem]">Sandy Williams</p>
                        </div>
                        <div className="flex justify-center gap-5 md:gap-7 flex-col w-[95%] md:w-auto">
                            <p className="text-balance leading-7 text-[1.05rem] md:text-[1rem]">
                                “Working with NextGen Business Innovators was a game-changer for my business. Their insights and guidance helped me
                                achieve my goals and stay ahead of the competition.”
                            </p>
                            <p className=" text-base md:text-[1rem]">Quinn Davis</p>
                        </div>
                    </div>
                </WrapperContainer>
            </section>

            <Footer />
        </main>
    );
}
