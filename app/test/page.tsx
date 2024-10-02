'use client'
import { useEffect, useState } from 'react'




interface ModalProps {
    title: string
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ title, children, isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false)

    const closeModal = () => {
        setIsClosing(true)
        setTimeout(() => {
            onClose()
            setIsClosing(false)
        }, 300)
    }

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeModal()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen])

    if (!isOpen) {
        return null // Return null if the modal is not open
    }

    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
                isClosing ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={closeModal}
        >
            <div
                className={`bg-white rounded-lg shadow-xl w-full max-w-md transition-all duration-300 ${
                    isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Close modal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </div>
    )
}


export default function Component() {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
        <div className="flex items-center justify-center min-h-screen">
            <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Open Modal
            </button>
            <Modal title="Example Modal" isOpen={isOpen} onClose={closeModal}>
                <p>This is the content of the modal. You can put any React components or HTML here.</p>
                <div className="mt-4 flex justify-end">
                    <button onClick={closeModal} className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors mr-2">
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Confirm</button>
                </div>
            </Modal>
        </div>
    )
}
