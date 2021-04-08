import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ThreeFirstComponent } from "@three/routes/first/three-first.component";


@NgModule( {
  imports: [
    CommonModule,
  ],
  declarations: [ ThreeFirstComponent ],
  exports: [ ThreeFirstComponent ]
} )
export class ThreeFirstModule { }


const routes: Routes = [
  { path: "", component: ThreeFirstComponent },
];

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    ThreeFirstModule
  ],
  declarations: []
} )
export class ThreeFirstRouterModule { }
