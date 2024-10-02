// pages/blog/[id].js
import Footer from '@/app/components/Footer'
import WrapperContainer from '@/app/components/WrapperContainer'
import { db } from '@/app/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'
import Testing from '@/app/components/Testing'
interface Blog {
    title: string
    content: string
    likes: number
    comments: Comment[]
}

interface Comment {
    content: string
    timestamp: number // Timestamp in milliseconds
}

export default async function BlogPage({ params }: { params: { id: string } }) {
    const id = params.id

    if (!id) {
        return <div>Blog ID not found</div>
    }

    const blogRef = doc(db, 'blogs', id)
    const blogDoc = await getDoc(blogRef)

    if (!blogDoc.exists()) return <Testing />

    const blog = blogDoc.data() as Blog

    console.log(blog)

    return (
        <div>
            <WrapperContainer>
                <div className="mt-5 md:mt-10 md:w-[65%] mx-auto md:pb-20 pb-10 animate-fadeIn">
                    <div className="flex items-center justify-between">
                        <div className="self-end">All Posts</div>
                        <button className="border border-primary text-primary bg-none outline-none px-4 py-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-black">
                            Log in / Sign up
                        </button>
                    </div>
                    <div className="mt-10 py-16 border border-gray-800 gap-7">
                        <div className="w-[80%] mx-auto">
                            <span>techvanb May 25 2 min read</span>
                        </div>
                    </div>
                </div>
            </WrapperContainer>
            <Footer />
        </div>
    )
}
