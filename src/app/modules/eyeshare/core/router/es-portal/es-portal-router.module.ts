import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EsPortalComponent } from './es-portal.component';
// ----------------------------------------------------------------------------


const routes = [ { path: "", component: EsPortalComponent } ];


@NgModule({ imports: [ CommonModule, RouterModule.forChild(routes) ] })
export class EsPortalRouterModule { }
