import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContextResolverService } from "@eyeshare/core/resolvers/context.resolver";
import { EsGridComponent } from "@eyeshare/core/router/es-grid/es-grid.component";
import { TenantGuard } from "@eyeshare/core/guards/tenant.guard";
import { DomainGuard } from "@eyeshare/core/guards/domain.guard";
import { ModuleGuard } from "@eyeshare/core/guards/module.guard";
import { WorkflowGuard } from "@eyeshare/core/guards/workflow.guard";


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


@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild( routes )
  ]
} )
export class EsGridRouterModule { }
