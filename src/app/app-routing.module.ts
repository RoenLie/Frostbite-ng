import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./modules/root/views/main/main.component";
import { Error404Component } from "./modules/root/views/error404/error404.component";

import { NewComponent } from "./modules/qualihr/views/new/new.component";
import { ListComponent } from "./modules/qualihr/views/list/list.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "qualihr/new", component: NewComponent },
  { path: "qualihr/list", component: ListComponent },
  { path: "**", component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
