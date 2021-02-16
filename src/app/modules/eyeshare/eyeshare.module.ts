import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EsLinesComponent } from './views/es-lines/es-lines.component';
import { EsPortalComponent } from './views/es-portal/es-portal.component';



@NgModule({
  declarations: [
    EsLinesComponent,
    EsPortalComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: "", redirectTo: "portal" },
      { path: "portal", component: EsPortalComponent },
      { path: "lines", component: EsLinesComponent }
    ]),
    CommonModule
  ]
})
export class EyeshareModule { }
