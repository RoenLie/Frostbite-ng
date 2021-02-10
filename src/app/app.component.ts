import { Component, OnInit } from '@angular/core';

import { LayoutService } from "./modules/root/layout/layout.service";
import { Layout } from "./modules/root/layout/layout";
import { FirebaseService } from './modules/root/services/firebase.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <app-layout [layout]="layout"></app-layout>
    </div>
  `,
  styles: [`
    .wrapper {
      height: 100%;
      width: 100%;
      border: 1px solid rgba(0,0,0,0);

      background-color: rgba(var(--bg-color-1));
      color: rgba(var(--txt-color-1));
    }
  `]
})
export class AppComponent implements OnInit {
  layout: Layout;

  constructor(
    private layoutService: LayoutService,
    private firebaseService: FirebaseService,
  ) {  }
  
  ngOnInit() {
    this.layout = this.layoutService.getLayouts().default;
  }
}
