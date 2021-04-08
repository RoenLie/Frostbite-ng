import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { setComponentModules } from "@eyeshare/core/helpers/component-decorators";
import { setServiceModules } from "@eyeshare/core/helpers/service-factories";


const routes: Routes = [
   {
      path: "",
      redirectTo: "global/sys",
   },
   {
      path: ":tenant/:domain/portal", loadChildren: async () =>
         ( await import( "./es-portal/es-portal-router.module" ) ).EsPortalRouterModule
   },
   {
      path: ":tenant/:domain/grid", loadChildren: async () =>
         ( await import( "./es-grid/es-grid-router.module" ) ).EsGridRouterModule,
   },
];


@NgModule( {
   imports: [ CommonModule, RouterModule.forChild( routes ) ],
} )
export class EyeshareRouterModule {
   constructor () {
      setComponentModules();
      setServiceModules();
   }
}