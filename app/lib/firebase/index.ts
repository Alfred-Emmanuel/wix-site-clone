import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { get } from 'http'

const firebaseConfig = {
    apiKey: 'AIzaSyC6Viyxm1ww8sunEer7_dD0gyw357ojVMw',
    authDomain: 'blog-ee30d.firebaseapp.com',
    projectId: 'blog-ee30d',
    storageBucket: 'blog-ee30d.appspot.com',
    messagingSenderId: '687710179832',
    appId: '1:687710179832:web:ad0b4142f25bac94f3860d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth()

const BLOGS_COLLECTION_NAME = 'blogs'

export { app, BLOGS_COLLECTION_NAME, db, storage, auth }
