import { Injectable, Injector, Type } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { AccountingService, FieldRenderers } from "@eyeshare/core/services/context/accounting.service";
import { ArchiveService } from "@eyeshare/core/services/context/archive.service";
import { CostInvoiceService } from "@eyeshare/core/services/context/costinvoice.service";
import { InvoiceService } from "@eyeshare/core/services/context/invoice.service";
import { PurchaseOrderService } from "@eyeshare/core/services/context/purchaseorder.service";
import { TravelService } from "@eyeshare/core/services/context/travel.service";
import {
   ARCHIVE, COSTINVOICE, INVOICE, PURCHASEORDER, TRAVEL,
   Module, ModuleService
} from "@eyeshare/core/services/module.service";


export const contextServices = new Map( [
   [ INVOICE, InvoiceService ],
   [ COSTINVOICE, CostInvoiceService ],
   [ PURCHASEORDER, PurchaseOrderService ],
   [ ARCHIVE, ArchiveService ],
   [ TRAVEL, TravelService ],
] );


export interface IContext {
   type: Module,
   count?: number,
   onInit: Function,
   onViewInit: Function,
   onContentInit: Function,
   onDestroy: Function,
   fieldRenderFunctions?: FieldRenderers<any, any>;
}


export const contextFactory = ( injector: Injector, moduleService: ModuleService ) => {
   const contextService = contextServices.get( moduleService.active.value );
   const context = contextService ? contextService : AccountingService;

   return injector.get( context as Type<IContext>, context );
};


@EsBaseInjector()
@Injectable( {
   providedIn: "root",
   // useFactory: () => EsServiceFactory( ContextService )
} )
export class ContextService {
   value: IContext;
   constructor ( private injector: Injector, private moduleService: ModuleService ) {
      this.moduleService.active.subscribe( module => {
         this.value = contextFactory( this.injector, this.moduleService );
      } );
   }
}