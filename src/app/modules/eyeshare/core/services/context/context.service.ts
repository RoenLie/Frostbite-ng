import { Inject, Injectable, Injector, Type } from "@angular/core";
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
   count?: number,
   onInit: Function,
   onViewInit: Function,
   onContentInit: Function,
   onDestroy: Function,
}

export const contextFactory = ( moduleService: ModuleService, injector: Injector ) => {
   const contextService = contextServices.find( ( ctx: TContextService ) =>
      ctx[ 0 ] == moduleService.active );

   let context: any = AccountingService;

   if ( contextService?.[ 1 ] ) context = contextService[ 1 ];

   return injector.get( context as Type<IContext> );
};


@EsBaseInjector()
@Injectable( {
   providedIn: "root",
} )
export class ContextService {

   moduleContext: IContext;
   constructor ( private moduleService: ModuleService, private injector: Injector ) {
      this.refreshModuleContext();
   }

   refreshModuleContext() {
      this.moduleContext = contextFactory( this.moduleService, this.injector );
   }
}