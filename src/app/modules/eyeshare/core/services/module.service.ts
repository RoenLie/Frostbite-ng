import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "@eyeshare/core/helpers/service-factories";


export declare type Module =
   "accounting" |
   "invoice" |
   "costinvoice" |
   "travel" |
   "archive" |
   "purchaseorder";


@EsBaseInjector()
@Injectable( {
   providedIn: "root",
   useFactory: () => EsServiceFactory( ModuleService )
} )
export class ModuleService {
   available: Module[] = [
      "invoice",
      "costinvoice",
      "travel",
      "archive",
      "purchaseorder",
   ];
   active: string = this.available[ 0 ];
}