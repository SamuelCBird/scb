// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/firestore";
import "firebase/storage";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBWnboNmVpm1hVSMDKrHKSTYhGYc0E4Wzg",
    authDomain: "samuelcbird-5c11a.firebaseapp.com",
    projectId: "samuelcbird-5c11a",
    storageBucket: "samuelcbird-5c11a.appspot.com",
    messagingSenderId: "764693052984",
    appId: "1:764693052984:web:693dc36ba680e23c8fb0cd"
});

var db = firebase.firestore();
var storage = firebase.storage().ref()

export {db, storage};

