import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from "src/environments/environment";

import firebase from "firebase/app";
import "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.User | null;
  isLoggedIn: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(
        environment.firebaseConfig);
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