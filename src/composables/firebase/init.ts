import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY as string,
 authDomain: 'scriptcenter01.firebaseapp.com',
  projectId: 'scriptcenter01',
  storageBucket: 'scriptcenter01.appspot.com',
  messagingSenderId: '876694921168',
  appId: '1:876694921168:web:487a4cf3738815f9cda3d5',
  measurementId: 'G-CQLEWS19JN'
}

export const app = initializeApp(firebaseConfig)
