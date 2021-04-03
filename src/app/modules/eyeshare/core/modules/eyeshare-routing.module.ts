import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

// ----------------------------------------------------------------------------

const routes = [
  { path: "", redirectTo: "global/sys" },

  { path: ":tenant/:domain/portal", loadChildren: async () => (
    await import("./es-portal/es-portal.module")).EsPortalModule },
  
  { path: ":tenant/:domain/grid", loadChildren: async () => (
    await import("./es-grid/es-grid.module")).EsGridModule},
];


@NgModule({
  declarations: [ ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EyeshareRouterModule { }
