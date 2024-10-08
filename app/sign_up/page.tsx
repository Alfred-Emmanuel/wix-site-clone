'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { auth } from '../lib/firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

function page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter() // Initialize useRouter for navigation

    const handleSignUp = async (e) => {
        e.preventDefault()
        setError('') // Reset error message

        try {
            // Create a new user with email and password
            await createUserWithEmailAndPassword(auth, email, password)
            router.push('/blog') // Redirect to the blog page after successful sign-up
        } catch (error) {
            setError(error.message) // Display the error message
        }
    }

    const handleGoogleSignUp = async () => {
        const provider = new GoogleAuthProvider()
        try {
            // Sign in with Google using a popup
            await signInWithPopup(auth, provider)
            router.push('/blog') // Redirect to the blog page after successful sign-up with Google
        } catch (error) {
            setError(error.message) // Display the error message
        }
    }

    return (
        <div className="bg-black flex items-center justify-center h-[100vh] flex-col">
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <p className="mt-7 text-xl">
                Already a member?{' '}
                <Link href="/login" className="text-primary font-medium">
                    Log in
                </Link>
            </p>
            <form className="mt-5 md:w-[20%]" onSubmit={handleSignUp}>
                <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-b outline-none bg-transparent py-1"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 mt-4 mb-4">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-b outline-none bg-transparent py-1"
                        required
                    />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="mt-5 w-full py-3 bg-primary text-black">
                    Sign Up
                </button>
            </form>
            <div className="w-[20%] mt-10 border-t relative">
                <p className="bg-black absolute -top-3 left-[28%] px-5 transform">or Sign Up with</p>
            </div>
            <div className="flex items-center gap-10 mt-10">
                <button onClick={handleGoogleSignUp} className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200">
                    Google
                </button>
            </div>
        </div>
    )
}

export default page
