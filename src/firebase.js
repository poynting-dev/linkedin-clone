// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCmd919r3r_khzJ5QX0ZZh2e_oMitstEmE",
    authDomain: "linkedin-clone-b1dfe.firebaseapp.com",
    projectId: "linkedin-clone-b1dfe",
    storageBucket: "linkedin-clone-b1dfe.appspot.com",
    messagingSenderId: "39795395017",
    appId: "1:39795395017:web:475d60148e635d8fff0018",
    measurementId: "G-M0022XQ6EL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;