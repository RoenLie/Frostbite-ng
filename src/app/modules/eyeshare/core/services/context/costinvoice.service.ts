import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "@eyeshare/core/helpers/service-factories";
import { IContext } from "@eyeshare/core/services/context/context.service";
import { InvoiceService } from "@eyeshare/core/services/context/invoice.service";
import { COSTINVOICE, Module } from "@eyeshare/core/services/module.service";


@EsBaseInjector()
@Injectable( {
    providedIn: "root",
    useFactory: () => EsServiceFactory( CostInvoiceService )
} )
export class CostInvoiceService extends InvoiceService implements IContext {
    type: Module = COSTINVOICE;
    constructor () { super(); }

    onInit() {
        super.onInit();
        console.log( "CostInvoiceService initialize" );
    }
    onViewInit() { console.log( "CostInvoiceService onViewInit" ); }
    onContentInit() { console.log( "CostInvoiceService onContentInit" ); }
    onDestroy() { console.log( "CostInvoiceService onDestroy" ); }
}