import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { OrbThreeComponent } from "@three/routes/second/orb.three.component";


@NgModule( {
  imports: [
    CommonModule,
  ],
  declarations: [ OrbThreeComponent ],
  exports: [ OrbThreeComponent ]
} )
export class ThreeSecondModule { }


const routes: Routes = [
  { path: "", component: OrbThreeComponent },
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    ThreeSecondModule
  ],
  declarations: []
} )
export class ThreeSecondRouterModule { }
