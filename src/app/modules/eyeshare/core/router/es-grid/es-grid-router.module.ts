import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowGuard } from '../../guards/workflow.guard';
import { ModuleGuard } from '../../guards/module.guard';
import { DomainGuard } from '../../guards/domain.guard';
import { TenantGuard } from '../../guards/tenant.guard';
import { EsGridComponent } from './es-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContextResolverService } from "@eyeshare/core/resolvers/context.resolver";
// ----------------------------------------------------------------------------


const routes: Routes = [
  { path: "", redirectTo: "invoice" },
  {
    path: ":module",
    component: EsGridComponent,
    canActivate: [
      TenantGuard,
      DomainGuard,
      ModuleGuard,
      WorkflowGuard
    ],
    resolve: {
      context: ContextResolverService
    }

  },
];


// ----------------------------------------------------------------------------


@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild( routes )
  ]
} )
export class EsGridRouterModule { }
