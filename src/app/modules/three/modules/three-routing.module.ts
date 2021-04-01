import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const asyncModule = async (module: any): Promise<any> => Object.values(await module)[0];


const routes: Routes = [
  // { path: "portal", loadChildren: async () => await asyncModule(import("./portal/three-portal.module")) },
  { path: "portal", loadChildren: async () => (await import("./portal/three-portal.module")).ThreeModule },
  { path: "first", loadChildren: async () => (await import("./first/three-first.module")).ThreeModule },
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ThreeRoutingModule { }
