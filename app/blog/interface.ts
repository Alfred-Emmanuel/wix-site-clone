import { StaticImageData } from "next/image"

export interface Blog {
    id: string
    title: string
    image: string | StaticImageData
    introductory: string
    content: string
    likes: number
    views: number
    comments: Comment[]
    timestamp: string
}

interface Comment {
    content: string
    timestamp: number // Timestamp in milliseconds
}
