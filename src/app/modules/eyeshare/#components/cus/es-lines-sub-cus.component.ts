import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { EsLinesSubComponent } from '../../core/components/es-lines-sub/es-lines-sub.component';


@Component({
  selector: 'es-lines-sub',
  template: `<div>SUB LINES CUS</div>`,
  styles: [``]
})
export class EsLinesSubComponentCus extends EsLinesSubComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  constructor() { super(); }

  ngOnInit() {
    console.log("I am es lines sub CUS");
  }
  ngAfterContentInit() { }
  ngAfterViewInit() { }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
}
