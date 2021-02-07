import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./modules/root/views/main/main.component";
import { Error404Component } from "./modules/root/views/error404/error404.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "**", component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
