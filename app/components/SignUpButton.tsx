'use client'

import { useAuth } from '../context/AuthContext'

function SignUpButton() {
    const { currentUser } = useAuth()

    return (
        <>
            {!currentUser ? (
                <button className="border border-primary text-primary bg-none outline-none px-4 py-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-black">
                    Log in / Sign up
                </button>
            ) : null}
        </>
    )
}

export default SignUpButton
