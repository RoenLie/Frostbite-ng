import { Injectable } from '@angular/core';

import { FirebaseFirestore } from "@firebase/firestore-types";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

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
export class FirestoreService {
  db: FirebaseFirestore; 

  constructor() {
    // this.db = firebase.firestore();
    AngularFireModule.initializeApp(firebaseConfig)
  
    // if (location.hostname === "localhost") {
    //   db.useEmulator("localhost", 8080);
    //   firebase.auth().useEmulator("http://localhost:9099/");
    //   firebase.functions().useEmulator("localhost", 5001);
    // }
  }
}
