import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EsPortalComponent } from './sys/views/es-portal/es-portal.component';
import { EsLinesComponent } from './sys/views/es-lines/es-lines.component';



@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forChild([
      { path: "", redirectTo: "portal" },
      { path: "portal", component: EsPortalComponent },
      { path: "lines", component: EsLinesComponent }
    ]),
    CommonModule
  ]
})
export class EyeshareCusModule { }
