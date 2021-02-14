import {
  Component, OnInit, Input, ViewChild,
  ComponentFactoryResolver, OnDestroy, ContentChild
} from '@angular/core';
import { Layout } from "./layout";
import { LayoutDirective } from "./layout.directive";
import { LayoutService } from './layout.service';

import { Router, RoutesRecognized, NavigationStart, NavigationEnd, Params } from '@angular/router';
import { BehaviorSubject } from "rxjs";

interface ILayout { data: any; }

@Component({
  selector: 'app-layout',
  template: `
    <div class="loader" *ngIf="loading">
          <mat-spinner></mat-spinner>
    </div>
    <ng-template appLayoutHost></ng-template>
  `,
  styles: [`
    .loader {
      position: fixed;
      display: grid;
      place-items: center;
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,0.5);
    }
  `]
})
export class LayoutComponent implements OnInit {
  layout: BehaviorSubject<Layout>
    = new BehaviorSubject<Layout>(
      this.layoutService.getLayouts().default);

  @ViewChild(LayoutDirective, { static: true }) layoutHost: LayoutDirective;

  loading: boolean = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private layoutService: LayoutService,
    private router: Router,
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
  ngOnInit(): void {
    if (!this.layout) {
      this.loadComponent(this.layoutService.getLayouts().default);
    }

    this.layout.subscribe((layout: Layout) => {
      this.loadComponent(layout);
    })
  }

  loadComponent(layout: Layout) {
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(layout.component);
    
    const viewContainerRef = this.layoutHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef
      .createComponent<ILayout>(componentFactory);
    componentRef.instance.data = layout.data;
  }

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
