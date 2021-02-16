import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DefaultLayoutService } from './default.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation, toggleLeft, toggleRight } from "./animations";
import { MenuService } from '../../services/menu.service';
import menu from "../../config/menu.json";

@Component({
  selector: 'app-default',
  template: `
    <div class="layout-wrapper">
      <app-nav-top></app-nav-top>

      <app-nav-left
        [@toggleLeft]
        *ngIf="defaultLayoutService.navigationLeftOpen">
      </app-nav-left>

      <app-nav-right
        [@toggleRight]
        *ngIf="defaultLayoutService
          .navigationRightOpen">
      </app-nav-right>
      
      <div class="main-wrapper" [@routeAnimations]="prepareRoute(outlet)">
        <router-outlet #outlet="outlet"></router-outlet>
      </div>
    </div>
  `,
  styles: [`
  .layout-wrapper {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr auto;

    height: 100%;
    width: 100%;
  }
  .main-wrapper {
    position: relative;
    grid-row: 2;
    grid-column: 2;
    height: var(--view-height);
    width: 100%;
  }
  router-outlet ~ * {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  `],
  encapsulation: ViewEncapsulation.None,
  animations: [
    toggleLeft,
    toggleRight,
    fadeAnimation
  ]
})
export class DefaultComponent implements OnInit {
  data: any;

  constructor(
    public defaultLayoutService: DefaultLayoutService,
    private menuService:  MenuService
  ) { }

  ngOnInit(): void {
    menu.forEach((menu) => this.menuService.add(menu));
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }
}
