'use client'

import React, { useState, useEffect } from 'react'
import TextArea from '@/app/components/form/TextArea'
import ImageUpload from '@/app/components/form/ImageUpload'
import { db, storage } from '@/app/lib/firebase'
import { collection, addDoc, onSnapshot, query } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useAuth } from '@/app/context/AuthContext'

interface Comment {
    id: string
    content: string
    imageUrl?: string
    createdAt: Date
    userName: string
}

const Comment: React.FC = () => {
    const { currentUser } = useAuth()
    const [comment, setComment] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [comments, setComments] = useState<Comment[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const q = query(collection(db, 'blogs.comments'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedComments = snapshot.docs.map((doc) => ({
                id: doc.id,
                content: doc.data().content,
                imageUrl: doc.data().imageUrl,
                createdAt: doc.data().createdAt?.toDate(),
                userName: doc.data().userName,
            }))
            setComments(fetchedComments)
        })

        return () => unsubscribe()
    }, [])

    const handleCommentSubmit = async () => {
        if (comment.trim() !== '' && currentUser) {
            let imageUrl = ''
            if (image) {
                const imageRef = ref(storage, `comments/${image.name}`)
                await uploadBytes(imageRef, image)
                imageUrl = await getDownloadURL(imageRef)
            }

            await addDoc(collection(db, 'blogs.comments'), {
                content: comment,
                imageUrl: imageUrl || null,
                createdAt: new Date(),
                userName: currentUser.displayName || 'Anonymous',
            })
            setComment('')
            setImage(null)
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleImageDelete = () => {
        setImage(null)
    }

    const handleCancel = () => {
        setIsModalOpen(true)
    }

    const handleDiscard = () => {
        setComment('')
        setImage(null)
        setIsModalOpen(false)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            {currentUser ? (
                <div className="flex flex-col ">
                    <TextArea
                        id="comment"
                        placeholder="Write your comment here..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={4}
                    />
                    <div className=" flex items-center justify-end gap-4">
                        <button
                            disabled={!comment.trim()}
                            onClick={handleCancel}
                            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            disabled={!comment.trim()}
                            onClick={handleCommentSubmit}
                            className={` justify-end bg-primary text-black py-2 px-4 rounded hover:text-white`}
                        >
                            Publish
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-gray-400">Please log in to add a comment.</p>
            )}

            <div className="mt-6">
                <h2 className="font-bold text-lg mb-4">Comments</h2>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="mb-4 p-2 border border-gray-700 rounded flex items-start gap-4">
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
                            <div>
                                <p className="text-white font-bold">{comment.userName}</p>
                                <p className="text-white">{comment.content}</p>
                                {comment.imageUrl && <img src={comment.imageUrl} alt="Comment Image" className="mt-2 w-full h-auto" />}
                                <small className="text-gray-400">{comment.createdAt?.toLocaleString()}</small>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No comments yet. Be the first to comment!</p>
                )}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded p-6 w-80 shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Are you sure you want to cancel?</h2>
                        <div className="flex justify-end gap-2">
                            <button onClick={handleDiscard} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                                Discard
                            </button>
                            <button onClick={handleModalClose} className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Comment
