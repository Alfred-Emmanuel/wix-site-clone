export interface Blog {
    id: string
    title: string
    image: string
    introductory: string
    content: string
    likes: number
    views: string
    comments: Comment[]
    timestamp: string
}

interface Comment {
    content: string
    timestamp: number // Timestamp in milliseconds
}
