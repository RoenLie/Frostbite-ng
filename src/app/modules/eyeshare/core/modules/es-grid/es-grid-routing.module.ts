import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EsGridComponent } from '../../views/es-grid/es-grid.component';
import { WorkflowGuard } from '../../guards/workflow.guard';
import { ModuleGuard } from '../../guards/module.guard';
import { DomainGuard } from '../../guards/domain.guard';
import { TenantGuard } from '../../guards/tenant.guard';


const routes = [
  { path: "", redirectTo: "invoice" },
  {
    path: ":module",
    component: EsGridComponent,
    canActivate: [
      TenantGuard,
      DomainGuard,
      ModuleGuard,
      WorkflowGuard
    ]
  },
];


@NgModule({
  declarations: [ ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EsGridRouterModule { }
