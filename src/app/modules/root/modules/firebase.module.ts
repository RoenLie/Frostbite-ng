import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDU-kzMDjOwQG6cSdGM6dSAa2kghK0qTCQ",
  authDomain: "frostbite-ng.firebaseapp.com",
  projectId: "frostbite-ng",
  storageBucket: "frostbite-ng.appspot.com",
  messagingSenderId: "642337881903",
  appId: "1:642337881903:web:97355faf69c0e9c36babda"
};

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: []
})
export class FirebaseModule { }
