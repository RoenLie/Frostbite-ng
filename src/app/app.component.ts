import { Component, OnInit } from '@angular/core';

import { LayoutService } from "./modules/root/layout/layout.service";
import { Layout } from "./modules/root/layout/layout";
import { Router, RoutesRecognized, NavigationStart, NavigationEnd, Params } from '@angular/router';

import { BehaviorSubject } from "rxjs";

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
  layout: BehaviorSubject<Layout>
    = new BehaviorSubject<Layout>(
      this.layoutService.getLayouts().default);

  constructor(
    private router: Router,
    private layoutService: LayoutService
  ) {
    router.events.subscribe(
      async (event) => {
        if (event instanceof RoutesRecognized) {
          const params = event.state.root.firstChild?.params;
          this.setLayoutFromRouteParam(params);
        } else if (event instanceof NavigationStart) {
        } else if (event instanceof NavigationEnd) {
        }
      }
    )
  }
  
  ngOnInit() { }

  setLayoutFromRouteParam(params: Params | undefined) {
    const layout: any = params?.layout;
    const newLayout = this.layoutService.getLayouts()[layout];

    if (!layout) {
      if (this.layout.value != this.layoutService.getLayouts().default) {
        this.layout.next(this.layoutService.getLayouts().default);
      }
    }

    if (!this.layoutService.layoutExists(layout)) return;
    if (this.layout.value == newLayout) return;

    this.layout.next(newLayout);
  }
}
