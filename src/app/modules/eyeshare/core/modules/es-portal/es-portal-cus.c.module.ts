import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsSubPortalComponentCus } from '../../components/es-sub-portal/es-sub-portal-cus.component';
import { EsPortalComponentsModule } from './es-portal.c.module';


@NgModule({
  imports: [
    CommonModule,
    EsPortalComponentsModule
  ],
  declarations: [
    EsSubPortalComponentCus,
  ],
  providers: [ ],
  exports: [ ],
})
export class EsPortalModuleCus { }
