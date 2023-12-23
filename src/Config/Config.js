import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// VITE_FIREBASE_STORAGE_BUCKET

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const firestore = firestore();
// export default {auth}
export const db = getFirestore(app)
console.log("firebase initialized",app)
// export default firebaseApp;
// console.log("authentication initialized", auth)

//export const fs = db;
// console.log("firestore initialized", db)

export const storage = getStorage(app);
console.log("Storage initialized:", storage);
