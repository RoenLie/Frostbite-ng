import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "portal", loadChildren: async () => ( await import( "./portal/three-portal.module" ) ).ThreeModule },
  { path: "first", loadChildren: async () => ( await import( "./first/three-first.module" ) ).ThreeFirstRouterModule },
  { path: "second", loadChildren: async () => ( await import( "./second/three-second.module" ) ).ThreeSecondRouterModule },
];


@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class ThreeRoutingModule { }
