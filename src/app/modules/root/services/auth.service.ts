import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import firebase from "firebase/app";
import "firebase/auth";


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
export class AuthService {
  user: firebase.User | null;
  isLoggedIn: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
    this.authenticate();
  }

  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      await firebase.auth().signInWithPopup(provider);
      this.isLoggedIn.next(true);
    } catch (error) {
      console.error(error);
      this.isLoggedIn.next(false);
    }
  }
  async logout() {
    try {
      await firebase.auth().signOut();
      this.isLoggedIn.next(false);
    } catch (error) {
      console.error(error);
    }
  }

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
      this.isLoggedIn.next(true);
    } catch (error) {
      console.error(error);
      this.isLoggedIn.next(false);
    }

    return this.isLoggedIn.value;
  }
}