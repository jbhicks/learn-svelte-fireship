import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBRFQQlnhmQlGZUAAWtkWPN68UFS9Hptto",
    authDomain: "my-web-site-27a15.firebaseapp.com",
    projectId: "my-web-site-27a15",
    storageBucket: "my-web-site-27a15.appspot.com",
    messagingSenderId: "457664227137",
    appId: "1:457664227137:web:ce57af4aaedf983c0623c0",
    measurementId: "G-65ZBY7MLQZ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);