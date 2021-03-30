import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsSubPortalComponent } from '../../components/es-sub-portal/es-sub-portal.component';
import { EsPortalComponent } from '../../views/es-portal/es-portal.component';
import { EsChildComponent } from '../../components/es-sub-portal/es-child.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EsPortalComponent,
    EsSubPortalComponent,
    EsChildComponent
  ],
  providers: [ ],
  exports: [
    EsPortalComponent,
    EsSubPortalComponent,
    EsChildComponent
  ],
})
export class EsPortalComponentsModule { }
