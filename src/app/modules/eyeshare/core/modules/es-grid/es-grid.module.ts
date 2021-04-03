import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsGridRouterModule } from './es-grid-routing.module';
import { EsGridComponent } from './es-grid.component';
import { EsTabsComponent } from '../../components/es-tabs/es-tabs.component';
import { EsModulesComponent } from '../../components/es-modules/es-modules.component';
import { EsDomainsComponent } from '../../components/es-domains/es-domains.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';
import { NgxdModule } from '@ngxd/core';
import { EsGridComponentsModule } from './es-grid-components.module';
import { EsGridComponentsCusModule } from "../../../#components/cus/es-grid-components-cus.module";
import { EsLinesComponent } from '../../components/es-lines/es-lines.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    NgxdModule,
    AgGridModule.withComponents([]),

    EsGridRouterModule,
    EsGridComponentsModule,
    EsGridComponentsCusModule
  ],
  declarations: [
    EsGridComponent
  ],
  providers: [ ],
  exports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EsGridModule { }
