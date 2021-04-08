import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "@eyeshare/core/helpers/service-factories";
import { AccountingService } from "@eyeshare/core/services/context/accounting.service";
import { IContext } from "@eyeshare/core/services/context/context.service";
import { Module } from "@eyeshare/core/services/module.service";


@EsBaseInjector()
@Injectable( {
    providedIn: "root",
    useFactory: () => EsServiceFactory( InvoiceService )
} )
export class InvoiceService extends AccountingService implements IContext {
    name: Module = "invoice";
    constructor () { super(); }
    onInit() {
        super.onInit();
        console.log( "InvoiveService initialize" );
    }
    onViewInit() { console.log( "InvoiveService onViewInit" ); }
    onContentInit() { console.log( "InvoiveService onContentInit" ); }
    onDestroy() { console.log( "InvoiveService onDestroy" ); }
}