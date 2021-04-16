import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { EsLinesComponentCus } from "@eyeshare/#components/cus/es-lines-cus.component";
import { EsLinesSubComponentCus } from "@eyeshare/#components/cus/es-lines-sub-cus.component";
import { EsCardComponentCus } from "@eyeshare/#implement/#components.cus";

@NgModule( {
   imports: [
      CommonModule,
   ],
   declarations: [
      EsCardComponentCus,
      EsLinesComponentCus,
      EsLinesSubComponentCus
   ],
   providers: [],
   exports: [],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
} )
export class EsCusModule { }