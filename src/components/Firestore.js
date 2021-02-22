// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBWnboNmVpm1hVSMDKrHKSTYhGYc0E4Wzg',
    authDomain: 'samuelcbird-5c11a.firebaseapp.com',
    projectId: 'samuelcbird-5c11a'
});

var db = firebase.firestore();

export default db;

