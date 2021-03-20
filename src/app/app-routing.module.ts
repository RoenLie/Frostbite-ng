import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "main" },
  {
    path: "main", loadChildren: async () => (
      await import("./modules/main/main.module")).MainModule,
    data: { animation: "fade" } },
  {
    path: "qualihr", loadChildren: async () => (
      await import("./modules/qualihr/qualihr.module")).QualihrModule,
    data: { animation: "fade" }
  },
  {
    path: "es", loadChildren: async () => (
      await import("./modules/eyeshare/core/modules/eyeshare.module")).EyeshareModule,
    data: { animation: "fade" }
  },
  {
    path: "404", loadChildren: async () => (
      await import("./modules/error404/error404.module")).Error404Module,
    data: { animation: "fade" }
  },
  {
    path: "**", redirectTo:"404", data: { animation: "fade" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
