import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsPortalRouterModule } from './es-portal-routing.module';
import { EsPortalComponentsModule } from './es-portal.c.module';
import { LazyLoaderService } from '../lazy/lazy.service';
import { LAZY_WIDGETS } from '../lazy/lazy.token';
import { lazyArrayToObj } from '../lazy/lazy.helpers';

// ----------------------------------------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    EsPortalRouterModule,
    EsPortalComponentsModule,
  ],
  declarations: [ ],
  providers: [ LazyLoaderService, { provide: LAZY_WIDGETS, useFactory: lazyArrayToObj } ],
  exports: [ ],
})
export class EsPortalModule { }
