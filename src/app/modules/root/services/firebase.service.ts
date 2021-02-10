import { Injectable } from '@angular/core';

import firebase from "firebase/app";

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

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}
