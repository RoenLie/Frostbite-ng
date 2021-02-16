import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Error404Component } from "./views/error404.component";
import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [Error404Component],
  imports: [
    RouterModule.forChild([
      { path: "", component: Error404Component },

    ]),

    CommonModule,
    AngularSvgIconModule,
  ],
  exports: [], 
  providers: [],
})
export class Error404Module {  }


