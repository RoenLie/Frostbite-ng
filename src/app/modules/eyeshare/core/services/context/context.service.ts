import { Injectable, Type } from "@angular/core";
import { ContextResolverService } from "@eyeshare/core/guards/context.guard";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { AccountingService } from "@eyeshare/core/services/context/accounting.service";
import { ArchiveService } from "@eyeshare/core/services/context/archive.service";
import { CostInvoiceService } from "@eyeshare/core/services/context/costinvoice.service";
import { InvoiceService } from "@eyeshare/core/services/context/invoice.service";
import { PurchaseOrderService } from "@eyeshare/core/services/context/purchaseorder.service";
import { TravelService } from "@eyeshare/core/services/context/travel.service";
import { Module, ModuleService } from "@eyeshare/core/services/module.service";


export type TContextService = [ Module, Type<any> ];
const contextServices: TContextService[] = [
   [ "invoice", InvoiceService ],
   [ "costinvoice", CostInvoiceService ],
   [ "purchaseorder", PurchaseOrderService ],
   [ "archive", ArchiveService ],
   [ "travel", TravelService ],
];


export interface IContext {
   context: Module,
   onInit: Function,
   onViewInit: Function,
   onContentInit: Function,
   onDestroy: Function,
}

export const contextFactory = ( ...args: any[] ) => {
   console.log( "context service factory" );

   const [ ModuleService ] = args;

   const contextService = contextServices.find( ( ctx: TContextService ) =>
      ctx[ 0 ] == ModuleService.active );

   let context: any = AccountingService;

   if ( contextService?.[ 1 ] ) context = contextService[ 1 ];

   return new context();
};


@EsBaseInjector()
@Injectable( {
   providedIn: "root",
   useFactory: contextFactory,
   deps: [ ModuleService ]
} )
export class ContextService implements IContext {
   context: Module = "accounting";
   constructor () { }
   reset() { }
   onInit() { console.log( "ContextService onInit" ); }
   onViewInit() { console.log( "ContextService onViewInit" ); }
   onContentInit() { console.log( "ContextService onContentInit" ); }
   onDestroy() { console.log( "ContextService onDestroy" ); }
}