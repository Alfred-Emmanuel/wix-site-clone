'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../lib/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const logout = async () => {
        await signOut(auth)
    }

    return <AuthContext.Provider value={{ currentUser, logout }}>{!loading && children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}
