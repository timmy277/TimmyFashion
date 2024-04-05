
// import { initializeApp } from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAMclUTZ0nBd8UuCQqseaJZIpDVVGAd_BM",
  authDomain: "timmyfashion-eeeb9.firebaseapp.com",
  projectId: "timmyfashion-eeeb9",
  storageBucket: "timmyfashion-eeeb9.appspot.com",
  messagingSenderId: "175423564371",
  appId: "1:175423564371:web:ecbe7a823e94e37facf4a6"
};



const app = firebase.initializeApp(firebaseConfig);


export default app;