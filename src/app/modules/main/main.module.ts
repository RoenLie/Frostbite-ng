import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './views/main-view/main-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ MainViewComponent],
  imports: [
    RouterModule.forChild([
      { path: "", component: MainViewComponent },
    ]),
    CommonModule
  ]
})
export class MainModule { }
