import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EsPortalComponent } from '../../views/es-portal/es-portal.component';


const routes = [
  {
    path: "",
    component: EsPortalComponent,
  },
];


@NgModule({
  declarations: [ ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EsPortalRouterModule { }
