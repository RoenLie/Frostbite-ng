import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsSubPortalComponentCus } from '../../components/es-sub-portal/es-sub-portal-cus.component';
import { EsChildComponent } from '../../components/es-sub-portal/es-child.component';
import { EsPortalComponentsModule } from './es-portal.components.module';


@NgModule({
  imports: [
    CommonModule,
    EsPortalComponentsModule
  ],
  declarations: [
    EsSubPortalComponentCus,
  ],
  providers: [ ],
  exports: [ EsSubPortalComponentCus ],
})
export class EsPortalModuleCus { }
