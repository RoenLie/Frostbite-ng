import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "@eyeshare/core/helpers/service-factories";
import { IContext } from "@eyeshare/core/services/context/context.service";
import { InvoiceService } from "@eyeshare/core/services/context/invoice.service";
import { Module, PURCHASEORDER } from "@eyeshare/core/services/module.service";


@EsBaseInjector()
@Injectable( {
    providedIn: "root",
    useFactory: () => EsServiceFactory( PurchaseOrderService )
} )
export class PurchaseOrderService extends InvoiceService implements IContext {
    type: Module = PURCHASEORDER;
    constructor () { super(); }

    onInit() {
        super.onInit();
        console.log( "PurchaseOrderService initialize" );
    }
    onViewInit() { console.log( "PurchaseOrderService onViewInit" ); }
    onContentInit() { console.log( "PurchaseOrderService onContentInit" ); }
    onDestroy() { console.log( "PurchaseOrderService onDestroy" ); }
}