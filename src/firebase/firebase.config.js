import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDiSO22Gy5FOvTL7d5_6e6NAAWRIOwZH4k",
    authDomain: "dragon-news-react-86b1e.firebaseapp.com",
    projectId: "dragon-news-react-86b1e",
    storageBucket: "dragon-news-react-86b1e.appspot.com",
    messagingSenderId: "102050143343",
    appId: "1:102050143343:web:48fd3a4ca9e1efe5f7419a"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);