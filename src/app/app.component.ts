import { Component, OnInit } from '@angular/core';

import { LayoutService } from "./modules/root/layout/layout.service";
import { Layout } from "./modules/root/layout/layout";
import { FirebaseService } from './modules/root/services/firebase.service';
import { AuthService } from './modules/root/services/auth.service';
import { FirestoreService } from './modules/root/services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  layout: Layout;

  constructor(
    private layoutService: LayoutService,
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) { }
  
  ngOnInit() {
    this.layout = this.layoutService.getLayouts().default;
  }
}
