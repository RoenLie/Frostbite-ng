import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, Type, Directive, ViewContainerRef } from '@angular/core';

// ----------------------------------------------------------------------------

@Directive({
  selector: '[esHost]',
})
export class EsDynamicDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

// ----------------------------------------------------------------------------

export interface IEsComponent {
  data: any;
}

// ----------------------------------------------------------------------------
export class EsItem {
  constructor(public component: Type<any>, public data: any) {}
}

// ----------------------------------------------------------------------------

@Component({
  template: `
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>
      <p>{{data.bio}}</p>
      <strong>Hire this hero today!</strong>
  `
})
export class EsCenterComponentSys implements IEsComponent {
  @Input() data: any;
}

// ----------------------------------------------------------------------------

@Component({
  selector: 'es-host',
  template: `<ng-template esHost></ng-template>`
})
export class EsHostComponent implements OnInit {
  item: EsItem;
  @ViewChild(EsDynamicDirective, {static: true}) esHost: EsDynamicDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.item = this.getEsComponent();
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item.component);

    const viewContainerRef = this.esHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<IEsComponent>(componentFactory);
    componentRef.instance.data = this.item.data;
  }

  getEsComponent() {
    return new EsItem(EsCenterComponentSys, { name: 'Bombasto', bio: 'Brave as they come' });
  }
}