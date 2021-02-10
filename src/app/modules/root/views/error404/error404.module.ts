import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Error404Component } from "./error404.component";

import { AngularSvgIconModule } from 'angular-svg-icon';


@NgModule({
  declarations: [Error404Component],
  imports: [
    RouterModule.forChild([
      { path: "", component: Error404Component },

    ]),

    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [], 
  providers: [],
})
export class Error404Module {  }


