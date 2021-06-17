import firebase from 'firebase'
import "firebase/storage";

//add by me
const firebaseConfig = {
    apiKey: "AIzaSyDU5UQbDp1HEEzDUUgyWDNleXSqA9OCLIU",
    authDomain: "plateforme-des-chercheurs-demo.firebaseapp.com",
    
    projectId: "plateforme-des-chercheurs-demo",
    storageBucket: "plateforme-des-chercheurs-demo.appspot.com",
    messagingSenderId: "977072052019",
    appId: "1:977072052019:web:245879e6f73c7354bad046"
  };

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebaseApp.firestore();
const storage = firebase.storage();

export { storage, db  }