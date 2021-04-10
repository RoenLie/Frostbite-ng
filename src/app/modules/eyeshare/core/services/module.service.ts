import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "@eyeshare/core/helpers/service-factories";
import { BehaviorSubject } from "rxjs";


export const ACCOUNTING: unique symbol = Symbol( "Accounting" );
export const INVOICE: unique symbol = Symbol( "Invoice" );
export const COSTINVOICE: unique symbol = Symbol( "CostInvoice" );
export const TRAVEL: unique symbol = Symbol( "Travel" );
export const ARCHIVE: unique symbol = Symbol( "Archive" );
export const PURCHASEORDER: unique symbol = Symbol( "PurchaseOrder" );

export type Module =
   typeof ACCOUNTING | typeof INVOICE | typeof COSTINVOICE |
   typeof TRAVEL | typeof ARCHIVE | typeof PURCHASEORDER;


@EsBaseInjector()
@Injectable( {
   providedIn: "root",
   useFactory: () => EsServiceFactory( ModuleService )
} )
export class ModuleService {
   available: Module[] = [
      INVOICE,
      COSTINVOICE,
      TRAVEL,
      ARCHIVE,
      PURCHASEORDER
   ];

   active: BehaviorSubject<Module> = new BehaviorSubject( this.available[ 0 ] );
}