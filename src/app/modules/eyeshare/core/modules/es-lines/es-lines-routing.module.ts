import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EsLinesComponent } from '../../components/es-lines/es-lines.component';


const routes = [
  { path: "", component: EsLinesComponent },
];


@NgModule({
  declarations: [ ],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class EsLinesRouterModule { }
