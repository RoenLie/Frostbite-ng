import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsBaseComponent, EsComponentDeps } from '../../helpers/component-decorators';


@EsBaseComponent()
@Component( {
  selector: 'es-card',
  templateUrl: 'es-card.component.html',
  styleUrls: [ './es-card.component.scss' ],
} )
@EsComponentDeps( {
  directives: []
} )
export class EsCardComponent implements OnInit, AfterViewInit {
  @Input() header: string = "Header from base";
  @Input() footer: string = "Footer from base";
  @Input() content: string = "Content from base";

  constructor () { }

  ngOnInit() { }
  ngAfterViewInit() { }
}


@NgModule( {
  imports: [
    CommonModule,
  ],
  declarations: [
    EsCardComponent
  ],
  providers: [],
  exports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
} )
export class EsCardModule { }