import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
// import { ComponentDeps } from '../../helpers/utils';


@Component({
  selector: 'es-lines-sub',
  template: `<div>SUB LINES</div>`,
  styles: [``]
})
// @ComponentDeps({
//   directives: [
//   ...LINES_COMPONENTS
//   ]
// })
export class EsLinesSubComponent implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  constructor() { }

  ngOnInit() {
    console.log("I am es lines sub");
  }
  ngAfterContentInit() { }
  ngAfterViewInit() { }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
}
