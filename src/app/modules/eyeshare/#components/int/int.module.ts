import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { EsCardComponentInt } from "@eyeshare/#components/int/es-card-int.component";


@NgModule( {
   imports: [
      CommonModule,
   ],
   declarations: [
      EsCardComponentInt
   ],
   providers: [],
   exports: [],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
} )
export class EsIntModule { }