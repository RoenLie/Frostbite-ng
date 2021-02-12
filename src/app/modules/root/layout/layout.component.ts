import {
  Component, OnInit, Input, ViewChild,
  ComponentFactoryResolver, OnDestroy, ContentChild
} from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd } from "@angular/router";
import { Layout } from "./layout";
import { LayoutDirective } from "./layout.directive";

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
  @Input() layout: Layout;
  @ViewChild(LayoutDirective, { static: true }) layoutHost: LayoutDirective;

  loading: boolean = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router,
  ) {
    router.events.subscribe(
      async (event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (event instanceof NavigationEnd) {
          this.loading = false;
        }
      }
    )
  }
  ngOnInit(): void { this.loadComponent(); }
  loadComponent() {
    const layout = this.layout;

    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(layout.component);
    
    const viewContainerRef = this.layoutHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef
      .createComponent<ILayout>(componentFactory);
    componentRef.instance.data = layout.data;
  }

}
