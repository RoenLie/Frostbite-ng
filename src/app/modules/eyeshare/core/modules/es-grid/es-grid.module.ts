import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsGridRouterModule } from './es-grid-routing.module';
import { EsGridComponent } from '../../views/es-grid/es-grid.component';
import { EsTableComponent } from '../../components/es-table/es-table.component';
import { EsLinesComponent } from '../../components/es-lines/es-lines.component';
import { EsDocumentComponent } from '../../components/es-document/es-document.component';
import { EsActionsComponent } from '../../components/es-actions/es-actions.component';
import { EsTabsComponent } from '../../components/es-tabs/es-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    EsGridRouterModule
  ],
  declarations: [
    EsGridComponent,
    EsTableComponent,
    EsLinesComponent,
    EsDocumentComponent,
    EsActionsComponent,
    EsTabsComponent
  ],
  providers: [ ],
  exports: [ ],
})
export class EsGridModule { }
