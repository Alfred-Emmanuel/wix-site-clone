'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    // const { currentUser } = useAuth()
    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault()
        setError('')

        try {
            await signInWithEmailAndPassword(auth, email, password)
            router.push('/blog')
        } catch (error) {
            setError(error.message)
        }
    }

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider()
        try {
            await signInWithPopup(auth, provider)
            router.push('/blog')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="bg-black flex items-center justify-center h-[100vh] flex-col">
            <h1 className="text-4xl font-bold">Log In</h1>
            <p className="mt-7 text-xl">
                New to this site?{' '}
                <Link href="/signup" className="text-primary font-medium">
                    Sign Up
                </Link>
            </p>
            <form className="mt-5 md:w-[20%]" onSubmit={handleLogin}>
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
                <Link href="#" className="">
                    Forgot Password?
                </Link>
                <button type="submit" className="mt-5 w-full py-3 bg-primary text-black">
                    Log In
                </button>
            </form>
            <div className="w-[20%] mt-10 border-t relative">
                <p className="bg-black absolute -top-3 left-[28%] px-5 transform">or log in with</p>
            </div>
            <div className="flex items-center gap-10 mt-10">
                <button onClick={handleGoogleLogin} className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200">
                    Google
                </button>
                <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200">Facebook</button>
            </div>
        </div>
    )
}

export default LoginPage
