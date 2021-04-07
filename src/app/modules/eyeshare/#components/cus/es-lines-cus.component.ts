import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';
import { EsComponentDeps } from '../../core/helpers/component-decorators';
import { EsLinesComponent } from "../../core/components/es-lines/es-lines.component";
import { EsLinesSubComponent } from "../../core/components/es-lines-sub/es-lines-sub.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


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
export class EsLinesComponentCus extends EsLinesComponent implements OnInit {
  message: string = "Initial message FROM CUS";
  constructor() { super(); }
  ngOnInit() {
    super.logger?.log();
  }
}


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [EsLinesComponentCus],
  providers: [],
  exports: []
})
export class EsLinesCusModule { }
