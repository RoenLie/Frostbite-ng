import { Injectable } from '@angular/core';

import { FirebaseFirestore } from "@firebase/firestore-types";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  db: FirebaseFirestore; 

  constructor() {
    this.db = firebase.firestore();
  
    // if (location.hostname === "localhost") {
    //   db.useEmulator("localhost", 8080);
    //   firebase.auth().useEmulator("http://localhost:9099/");
    //   firebase.functions().useEmulator("localhost", 5001);
    // }
  }
}
