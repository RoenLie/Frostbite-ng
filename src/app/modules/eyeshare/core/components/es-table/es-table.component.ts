import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgxdModule } from '@ngxd/core';
import { EsBaseComponent, EsComponentDeps } from "@eyeshare/core/helpers/component-decorators";


@EsBaseComponent()
@EsComponentDeps( { directives: [] } )
@Component( {
  selector: 'es-table',
  templateUrl: 'es-table.component.html',
  styleUrls: [ 'es-table.component.scss' ],
} )
export class EsTableComponent implements AfterViewInit {

  constructor () { }

  ngAfterViewInit() { }
}


@NgModule( {
  imports: [
    CommonModule,
    FormsModule,

    NgxdModule,
    AgGridModule.withComponents( [] ),
  ],
  declarations: [
    EsTableComponent
  ],
  providers: [],
  exports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
} )
export class EsTableModule { }