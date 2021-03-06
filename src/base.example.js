import firebase from 'firebase/app';
import 'firebase/database';
import Rebase from 're-base';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID"
}

const app = firebase.initializeApp(config);

const db = firebase.database(app);
const base = Rebase.createClass(db);

//Configure authentication
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
  
export default base;
