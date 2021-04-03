import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsPortalComponent } from './es-portal.component';

// ----------------------------------------------------------------------------

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [ ],
  declarations: [ EsPortalComponent ],
  exports: [ EsPortalComponent ],
})
export class EsPortalComponentsModule { }
