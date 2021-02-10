import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { MainComponent } from "./modules/root/views/main/main.component";
import { Error404Component } from "./modules/root/views/error404/error404.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  {
    path: "qualihr", loadChildren: async () =>
      (await import("./modules/qualihr/qualihr.module")).QualihrModule
  },
  {
    path: "404", loadChildren: async () =>
      (await import("./modules/root/views/error404/error404.module")).Error404Module
  },
  {
    path: "**", redirectTo:"404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
