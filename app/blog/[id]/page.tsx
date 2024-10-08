// pages/blog/[id].js
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import WrapperContainer from '@/app/components/WrapperContainer'
import { db } from '@/app/lib/firebase'
import { formatBlogDate } from '@/app/utils/formatDate'
import InViewWrapper from '@/app/utils/InViewWrapper'
import { doc, getDoc } from 'firebase/firestore'
import { NotFoundBoundary } from 'next/dist/client/components/not-found-boundary'
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '../interface'
import LikeButton from './likes'
import Comment from './comments'
import { useAuth } from '@/app/context/AuthContext'

export default async function BlogPage({ params }: { params: { id: string } }) {
    const id = params.id
    // const { currentUser } = useAuth()

    if (!id) {
        return <div>Blog ID not found</div>
    }

    const blogRef = doc(db, 'blogs', id)
    const blogDoc = await getDoc(blogRef)

    if (!blogDoc.exists()) return <NotFoundBoundary>Invalid Blog</NotFoundBoundary>

    const blog = {
        ...blogDoc.data(),
        id: blogDoc.id,
    } as Blog
    //  const handleAddComment = async (blogId: string, comment: Comment) => {
    //      try {
    //          const blogRef = doc(db, 'blogs', blogId)
    //          const blogDoc = await getDoc(blogRef)
    //          const currentComments = blogDoc.data()?.comments || []
    //          await updateDoc(blogRef, { comments: [...currentComments, comment] })
    //      } catch (error) {
    //          console.error('Error adding comment:', error)
    //      }
    //  }

    return (
        <div>
            <Navbar />
            <WrapperContainer>
                <div className="mt-8 md:mt-24 mb-16  md:w-[63%] mx-auto">
                    <div className="flex justify-between items-center">
                        {/* <h1>All posts</h1> */}
                        <Link href={'/blog'} className="hover:text-primary transition-all duration-200 ease-in-out text-sm">
                            All Posts
                        </Link>
                        {/* <button className="border border-primary text-primary bg-none outline-none px-4 py-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-black">
                            Log in / Sign up
                        </button> */}
                    </div>
                    <div className="border border-gray-800 mt-10 mb-4 py-16 ">
                        <div className="w-[80%] mx-auto">
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
                                        <p>{formatBlogDate(blog.timestamp).formattedDate}</p>
                                        <p>.</p>
                                        <p>{formatBlogDate(blog.timestamp).timeAgoString}</p>
                                    </span>
                                </div>
                            </div>
                            <h1 className="md:mt-8 text-2xl font-bold">{blog.title}</h1>
                            <p className="mt-5  leading-7 text-lg">{blog.introductory}</p>
                            <Image src={blog.image} width={100} height={100} alt="news" className="h-[300px] md:h-[500px] w-full object-cover my-5" />
                            <p className="mt-5 md:mt-10 leading-7 text-lg">{blog.content}</p>

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
                                        <p className="cursor-pointer">{blog.views} views</p>
                                        <p className="cursor-pointer">{blog.comments.length} comments</p>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <LikeButton blog={blog} />
                                    </div>
                                </div>
                            </InViewWrapper>
                        </div>
                    </div>

                    <Link href={'/blog'} className="hover:text-primary transition-all flex justify-end w-full duration-200 ease-in-out text-sm">
                        See all
                    </Link>

                    <div className="border border-gray-800 mt-10 mb-4 py-10 ">
                        <div className="w-[80%] mx-auto">
                            <InViewWrapper className={`border-animate border-bottom pb-4`} style={{ '--border-color': '#1f2937' }}>
                                <h1 className="font-bold tracking-wide text-base">Comments</h1>
                                <Comment />
                            </InViewWrapper>
                        </div>
                    </div>
                </div>
            </WrapperContainer>

            <Footer />
        </div>
    )
}
