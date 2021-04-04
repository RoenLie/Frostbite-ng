import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, CUSTOM_ELEMENTS_SCHEMA,
  DoCheck, NgModule, OnChanges, OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { EsLinesSubComponent } from '../../core/components/es-lines-sub/es-lines-sub.component';
import { EsInitialize } from '../../core/helpers/component-decorators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// ----------------------------------------------------------------------------


@Component({
  selector: 'es-lines-sub',
  template: `
  <div>SUB LINES CUS</div>
  <div>{{ message }}</div>
  `,
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

// ----------------------------------------------------------------------------

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EsLinesSubComponentCus,
  ],
  providers: [ ],
  exports: [ ]
})
export class EsLinesSubCusModule { }
