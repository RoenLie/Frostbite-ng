import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU-kzMDjOwQG6cSdGM6dSAa2kghK0qTCQ",
  authDomain: "frostbite-ng.firebaseapp.com",
  projectId: "frostbite-ng",
  storageBucket: "frostbite-ng.appspot.com",
  messagingSenderId: "642337881903",
  appId: "1:642337881903:web:97355faf69c0e9c36babda"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();
if (location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
  firebase.auth().useEmulator("http://localhost:9099/");
  firebase.functions().useEmulator("localhost", 5001);
}

// Setup logged in state link to store
firebase.auth().onAuthStateChanged(user => {
  if (user) databaseStore.setDb(db);
  authStore.set().user = user;

  if (process.env.NODE_ENV === "development") {
    const emulatorWarning = document.querySelector("body > div.firebase-emulator-warning");
    if (emulatorWarning) { document.body.removeChild(emulatorWarning); }
  }
});
