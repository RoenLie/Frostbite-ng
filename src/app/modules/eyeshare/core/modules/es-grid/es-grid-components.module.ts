import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EsLinesComponent } from '../../components/es-lines/es-lines.component';
import { EsTabsComponent } from '../../components/es-tabs/es-tabs.component';
import { EsModulesComponent } from '../../components/es-modules/es-modules.component';
import { EsDomainsComponent } from '../../components/es-domains/es-domains.component';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EsLinesComponent,
    EsTabsComponent,
    EsModulesComponent,
    EsDomainsComponent,
  ],
  providers: [ ],
  exports: [ ]
})
export class EsGridComponentsModule { }
