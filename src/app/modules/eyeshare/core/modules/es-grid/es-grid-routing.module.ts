import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EsGridComponent } from '../../views/es-grid/es-grid.component';
import { WorkflowGuard } from '../../guards/workflow.guard';


const routes = [
  { path: "", redirectTo: "invoice" },
  { path: ":module", component: EsGridComponent, canActivate: [ WorkflowGuard ] },
];


@NgModule({
  declarations: [ ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EsGridRouterModule { }
