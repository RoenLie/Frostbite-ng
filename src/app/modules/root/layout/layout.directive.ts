import { Input, Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLayoutHost]',
})
export class LayoutDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

