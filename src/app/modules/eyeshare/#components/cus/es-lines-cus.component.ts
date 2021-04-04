import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator,
  CUSTOM_ELEMENTS_SCHEMA, DoCheck, NgModule, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { EsComponentDeps, EsInitialize } from '../../core/helpers/component-decorators';
import { EsLinesComponent } from "../../core/components/es-lines/es-lines.component";
import { EsLinesSubComponent } from "../../core/components/es-lines-sub/es-lines-sub.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// ----------------------------------------------------------------------------


@Component({
  selector: 'es-lines',
  templateUrl: "../../core/components/es-lines/es-lines.component.html",
  styles: [``],
})
@EsComponentDeps({
  directives: [
    EsLinesSubComponent
  ]
})
export class EsLinesComponentCus extends EsLinesComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  message: string = "Initial message FROM CUS";

  constructor() { super(); }

  ngOnInit() {
    super.logger?.log();
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
    EsLinesComponentCus,
  ],
  providers: [ ],
  exports: [ ]
})
export class EsLinesCusModule { }
