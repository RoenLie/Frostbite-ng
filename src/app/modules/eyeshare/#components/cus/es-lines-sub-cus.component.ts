import { Component, OnInit } from '@angular/core';
import { EsLinesSubComponent } from '../../core/components/es-lines-sub/es-lines-sub.component';


@Component( {
  selector: 'es-lines-sub',
  template: `
  <div>SUB LINES CUS</div>
  <div>{{ message }}</div>
  `,
  styles: [ `` ]
} )
export class EsLinesSubComponentCus extends EsLinesSubComponent implements OnInit {
  constructor () { super(); }
  ngOnInit() {
    console.log( "I am es lines sub CUS" );
    console.log( "I am test man" );
  }
}
