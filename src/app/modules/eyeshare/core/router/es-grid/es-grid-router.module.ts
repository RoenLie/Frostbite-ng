import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { WorkflowGuard } from '../../guards/workflow.guard';
import { ModuleGuard } from '../../guards/module.guard';
import { DomainGuard } from '../../guards/domain.guard';
import { TenantGuard } from '../../guards/tenant.guard';
import { EsGridComponent } from './es-grid.component';
// ----------------------------------------------------------------------------


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


// ----------------------------------------------------------------------------


@NgModule({ imports: [ CommonModule, RouterModule.forChild(routes) ] })
export class EsGridRouterModule { }