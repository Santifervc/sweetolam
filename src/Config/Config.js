import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY ,
  authDomain: import.meta.VITE_FIREBASE_AUTH_DOMAIN ,
  projectId: import.meta.VITE_FIREBASE_STORAGE_BUCKET ,
  storageBucket: import.meta.VITE_FIREBASE_PROJECT_ID,
  messagingSenderId: import.meta.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.VITE_FIREBASE_MEASUREMENT_ID
};

initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// console.log("firebase initialized",app)

// export const auth = getAuth(app);
// console.log("authentication initialized", auth)

// export const fs = db;
// console.log("firestore initialized", db)

// export const storage = getStorage(app);
// console.log("Storage initialized:", storage);
