import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "@eyeshare/core/helpers/service-factories";
import { IContext } from "@eyeshare/core/services/context/context.service";
import { InvoiceService } from "@eyeshare/core/services/context/invoice.service";
import { Module, TRAVEL } from "@eyeshare/core/services/module.service";


@EsBaseInjector()
@Injectable( {
    providedIn: "root",
    useFactory: () => EsServiceFactory( TravelService )
} )
export class TravelService extends InvoiceService implements IContext {
    type: Module = TRAVEL;
    count = 4;


    constructor () { super(); }
    onInit() {
        super.onInit();
        console.log( "TravelService initialize" );
    }
    onViewInit() { console.log( "TravelService onViewInit" ); }
    onContentInit() { console.log( "TravelService onContentInit" ); }
    onDestroy() { console.log( "TravelService onDestroy" ); }

}