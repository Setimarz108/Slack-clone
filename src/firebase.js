// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBbCwP9tjABCRFA5RKc6g5PUOg2gdoKDFg",

  authDomain: "slack-app-1f966.firebaseapp.com",

  projectId: "slack-app-1f966",

  storageBucket: "slack-app-1f966.appspot.com",

  messagingSenderId: "655624778758",

  appId: "1:655624778758:web:f91706f91f653aa958bf87",

  measurementId: "G-SQQP1G4YN9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db}