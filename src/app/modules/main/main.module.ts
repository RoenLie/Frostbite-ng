import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './views/main-view/main-view.component';
import { RouterModule } from '@angular/router';
import { OrbThreeComponent } from "@three/routes/second/orb.three.component";



@NgModule( {
  declarations: [ MainViewComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild( [
      { path: "", component: OrbThreeComponent },
    ] ),
  ]
} )
export class MainModule { }
