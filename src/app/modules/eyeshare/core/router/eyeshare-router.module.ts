import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
// ----------------------------------------------------------------------------


const routes = [
  { path: "", redirectTo: "global/sys" },

  { path: ":tenant/:domain/portal", loadChildren: async () => (
    await import("./es-portal/es-portal-router.module")).EsPortalRouterModule },
  
  { path: ":tenant/:domain/grid", loadChildren: async () => (
    await import("./es-grid/es-grid-router.module")).EsGridRouterModule},
];


@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
})
export class EyeshareRouterModule { }