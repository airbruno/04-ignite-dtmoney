import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyDGpe_Mp7IEl-VKVK5FW6gsG8IEV41IRM8',
  authDomain: 'dtmoney-de714.firebaseapp.com',
  projectId: 'dtmoney-de714',
  storageBucket: 'dtmoney-de714.firebasestorage.app',
  messagingSenderId: '452125228014',
  appId: '1:452125228014:web:2caeff734c533da221acff',
  measurementId: 'G-CT5E0BF7ME',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
