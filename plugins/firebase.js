import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuUYLpHKboQTjX7O1wxLj1031e8d2RXmk",
  authDomain: "kanzlei-bf.firebaseapp.com",
  databaseURL: "https://kanzlei-bf.firebaseio.com",
  projectId: "kanzlei-bf",
  storageBucket: "kanzlei-bf.appspot.com",
  messagingSenderId: "727262562759",
  appId: "1:727262562759:web:0eb43f4e8a12d88da731e2",
  measurementId: "G-6TTNY63VNL"
}
// Initialize Firebase

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
