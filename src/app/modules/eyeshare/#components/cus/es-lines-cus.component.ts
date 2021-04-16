import { Component, OnInit } from '@angular/core';
import { EsComponentDeps } from '../../core/helpers/component-decorators';
import { EsLinesComponent } from "../../core/components/es-lines/es-lines.component";
import { EsLinesSubComponent } from "../../core/components/es-lines-sub/es-lines-sub.component";


@Component( {
  selector: 'es-lines',
  template: `
    <div>OVERRIDDEN ES-LINES COMPONENT TEMPLATE</div>
  `,
  styles: [ `` ],
} )
@EsComponentDeps( {
  directives: [
    EsLinesSubComponent
  ]
} )
export class EsLinesComponentCus extends EsLinesComponent implements OnInit {
  message: string = "Initial message FROM CUS";
  constructor () { super(); }
  ngOnInit() {
    super.logger?.log();
  }
}
