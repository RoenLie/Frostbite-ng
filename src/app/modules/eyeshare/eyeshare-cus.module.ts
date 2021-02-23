import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsPortalService as cus} from './injection/es-portal/es-portal-cus.service';
import { EsPortalService } from './injection/es-portal/es-portal-sys.service';

console.log("cus module");


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule
  ],
  providers: [ { provide: EsPortalService, useClass: cus } ]
})
export class EyeshareCusModule { }
