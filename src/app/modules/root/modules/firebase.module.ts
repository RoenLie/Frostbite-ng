import { NgModule } from '@angular/core';
import { environment } from "src/environments/environment";

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [],
  imports: [
    AngularFirestoreModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: []
})
export class FirebaseModule { }
