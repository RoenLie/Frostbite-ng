import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyeshareIntModule } from './eyeshare-int.module';
import { EyeshareRouterModule } from './eyeshare-routing.module';
import { EsPortalService } from './injection/es-portal/es-portal-sys.service';

import { EsPortalService as cus } from './injection/es-portal/es-portal-cus.service';


console.log("sys module");


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    EyeshareIntModule,
    EyeshareRouterModule
  ],
  providers: [{
    provide: EsPortalService, useFactory: () => {
      console.log("hei");
    }
  }]
  // providers: [ EsPortalService ]
})
export class EyeshareModule { }
