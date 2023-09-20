// import * as firebase from "firebase/app";
// import firebase from 'firebase/app';
// import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



// console.log("firebase",firebase)

const firebaseConfig = {
    apiKey: "AIzaSyCoI_L3zGPQjLCaScxabmkV9wLkAX8Crds",
    authDomain: "eat-app-21c40.firebaseapp.com",
    projectId: "eat-app-21c40",
    storageBucket: "eat-app-21c40.appspot.com",
    messagingSenderId: "440912033158",
    appId: "1:440912033158:web:a8433449ed71d4a025e807"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore;
// const auth = firebaseApp.auth();
  
  export default firebaseApp;