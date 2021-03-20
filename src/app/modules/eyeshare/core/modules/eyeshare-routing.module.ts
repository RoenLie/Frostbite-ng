import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


const routes = [
  { path: "", redirectTo: "portal" },
  { path: "portal", loadChildren: async () => (
    await import("./es-portal/es-portal.module")).EsPortalModule},
  { path: "lines", loadChildren: async () => (
    await import("./es-lines/es-lines.module")).EsLinesModule},
];


@NgModule({
  declarations: [ ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EyeshareRouterModule { }
