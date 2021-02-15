import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";
import { IAuthService } from './IAuth.service';

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
export class AuthService implements IAuthService<firebase.User | null>{
  user: firebase.User | null;

  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.authenticate();
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logout() { firebase.auth().signOut(); }

  isLoggedIn() { return !!this.user; }

  async authenticate() {
    const authentication = new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(u => {
        this.user = u;
        if (u) resolve(u.uid);
        else reject("not logged in");
      })
    });

    try {
      await authentication;
    } catch (error) {
      console.error(error);
    }

    return this.isLoggedIn();
  }
}