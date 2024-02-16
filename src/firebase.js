import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDsBazQZMp__rR6fCOJ2I6_YG2W5j9stI4",
    authDomain: "devpedro-b54e3.firebaseapp.com",
    projectId: "devpedro-b54e3",
    storageBucket: "devpedro-b54e3.appspot.com",
    messagingSenderId: "958113500395",
    appId: "1:958113500395:web:2d8f805a5fce4fa72b42ae",
    measurementId: "G-KPP3H0Y1JT"
}  

const appFirebase = initializeApp(firebaseConfig)

export default appFirebase