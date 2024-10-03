'use client'
import Link from 'next/link'
import { blogService } from '../lib/firebase/blogService'
import { Blog } from './interface'

function BlogCardContainer({ blog, children }: { blog: Blog; children: React.ReactNode }) {
    const { handleIncreaseView } = blogService()

    return (
        <Link
            href={`/blog/${blog.id}`}
            onClick={() => handleIncreaseView(blog.id)}
            className="flex border group border-gray-800 flex-col md:flex-row gap-3"
        >
            {children}
        </Link>
    )
}

export default BlogCardContainer
