import { Injectable } from '@angular/core';
import firebase from "firebase/app";
import "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  user: firebase.User | null;

  constructor() {
    firebase.auth().onAuthStateChanged(user => this.user = user);
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logout() {
    firebase.auth().signOut();
  }
}
