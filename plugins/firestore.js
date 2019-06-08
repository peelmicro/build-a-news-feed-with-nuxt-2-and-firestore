import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: "AIzaSyBjq48QI0xbHMFMI3O_jGv7Z7Yo20qIGRQ",
    authDomain: "nuxt-blog-b3292.firebaseapp.com",
    databaseURL: "https://nuxt-blog-b3292.firebaseio.com",
    projectId: "nuxt-blog-b3292",
    storageBucket: "nuxt-blog-b3292.appspot.com",
    messagingSenderId: "93621928223",
    appId: "1:93621928223:web:5000a6de279c7246"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({
    timestampsInSnapshots: true
  });
}

const db = firebase.firestore();

export default db;
