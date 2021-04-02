import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsPortalComponent } from '../../views/es-portal/es-portal.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ ],
  declarations: [ EsPortalComponent ],
  exports: [ EsPortalComponent ],
})
export class EsPortalComponentsModule { }
