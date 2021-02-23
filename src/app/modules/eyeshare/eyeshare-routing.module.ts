import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EsPortalComponent } from './sys/views/es-portal/es-portal.component';
import { EsLinesComponent } from './sys/views/es-lines/es-lines.component';

const routes = [
  { path: "", redirectTo: "portal" },
  { path: "portal", component: EsPortalComponent },
  { path: "lines", component: EsLinesComponent }
];


@NgModule({
  declarations: [ ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EyeshareRouterModule { }
