import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2tPrpL8_WYGohoGm3eloZzUu_xnWUWRI",
    authDomain: "tiendaonline-ca2ad.firebaseapp.com",
    projectId: "tiendaonline-ca2ad",
    storageBucket: "tiendaonline-ca2ad.appspot.com",
    messagingSenderId: "199770709257",
    appId: "1:199770709257:web:0e690d374c3fa5b3e447d8",
    measurementId: "G-LCNVT5T3SF"
};

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })

export default{
  auth: firebase.auth()
}
