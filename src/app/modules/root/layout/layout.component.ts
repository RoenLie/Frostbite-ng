import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy, ContentChild } from '@angular/core';
import { Layout } from "./layout";
import { LayoutDirective } from "./layout.directive";

interface ILayout { data: any; }

@Component({
  selector: 'app-layout',
  template: '<ng-template appLayoutHost></ng-template>',
})
export class LayoutComponent implements OnInit {
  @Input() layout: Layout;
  @ViewChild(LayoutDirective, { static: true }) layoutHost: LayoutDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
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
