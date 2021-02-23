import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyeshareCusModule } from './eyeshare-cus.module';
import { EsPortalService as int} from './injection/es-portal/es-portal-int.service';
import { EsPortalService } from './injection/es-portal/es-portal-sys.service';

console.log("int module");


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    EyeshareCusModule
  ],
  providers: [ { provide: EsPortalService, useClass: int } ]
})
export class EyeshareIntModule { }
 