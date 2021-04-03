import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { EsComponentDeps } from '../../core/helpers/component-decorators';


@Component({
  selector: 'es-lines',
  template: `<div>Main LInes component</div>`,
  styles: [``]
})
// @EsInitialize
@EsComponentDeps({
  directives: [
    // EsLinesSubComponent
  ]
})
export class EsLinesComponentCus implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  message: string = "Initial message";

  constructor() { }

  ngOnInit() { }
  ngAfterContentInit() { }
  ngAfterViewInit() { }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
}
