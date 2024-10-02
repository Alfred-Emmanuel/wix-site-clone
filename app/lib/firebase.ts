import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyAeh9Mt6OIRsWK7UqGXjDhqFOdFD-kuE_A',
    authDomain: 'ahmad-ca641.firebaseapp.com',
    projectId: 'ahmad-ca641',
    storageBucket: 'ahmad-ca641.appspot.com',
    messagingSenderId: '818227343701',
    appId: '1:818227343701:web:10fc8b05727319162bbfdc',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }
