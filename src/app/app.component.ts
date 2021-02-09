import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from "@angular/router";

import { LayoutService } from "./modules/root/layout/layout.service";
import { Layout } from "./modules/root/layout/layout";
import { FirebaseService } from './modules/root/services/firebase.service';
import { AuthService } from './modules/root/services/auth.service';
import { FirestoreService } from './modules/root/services/firestore.service';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  layout: Layout;
  loading: boolean;

  constructor(
    private router: Router,
    private layoutService: LayoutService,
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) {
    this.loading = false;
    router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (event instanceof NavigationEnd) {
          this.loading = false;
        }
      }
    )
  }
  
  ngOnInit() {
    this.layout = this.layoutService.getLayouts().default;
  }
}
