import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { setModules } from '../helpers/component-decorators';
// ----------------------------------------------------------------------------


const routes: Routes = [
  {
    path: "",
    redirectTo: "global/sys",
  },
  {
    path: ":tenant/:domain/portal", loadChildren: async () =>
      (await import("./es-portal/es-portal-router.module")).EsPortalRouterModule
  },
  {
    path: ":tenant/:domain/grid", loadChildren: async () =>
      (await import("./es-grid/es-grid-router.module")).EsGridRouterModule,
  },
];


@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
})
export class EyeshareRouterModule {
  constructor() { setModules(); }
}