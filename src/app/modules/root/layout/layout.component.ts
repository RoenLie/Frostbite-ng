import {
  Component, OnInit, Input, ViewChild,
  ComponentFactoryResolver, OnDestroy, ContentChild
} from '@angular/core';
import { Layout } from "./layout";
import { LayoutDirective } from "./layout.directive";
import { LayoutService } from './layout.service';

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
  @Input() layout: BehaviorSubject<Layout>;

  @ViewChild(LayoutDirective, { static: true }) layoutHost: LayoutDirective;

  loading: boolean = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private layoutService: LayoutService,
  ) { }
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
}
