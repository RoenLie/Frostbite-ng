import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './views/main-view/main-view.component';
import { RouterModule } from '@angular/router';
import { ThreeFirstComponent } from "@three/routes/first/three-first.component";



@NgModule( {
  declarations: [ MainViewComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild( [
      { path: "", component: ThreeFirstComponent },
    ] ),
  ]
} )
export class MainModule { }
