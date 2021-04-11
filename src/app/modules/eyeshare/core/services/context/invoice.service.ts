import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "@eyeshare/core/helpers/service-factories";
import { AccountingFRF, AccountingService, FieldRenderers } from "@eyeshare/core/services/context/accounting.service";
import { IContext } from "@eyeshare/core/services/context/context.service";
import { INVOICE, Module } from "@eyeshare/core/services/module.service";


export interface InvoiceFRF {
    roundDown( value: number ): number;
}


@EsBaseInjector()
@Injectable( {
    providedIn: "root",
    useFactory: () => EsServiceFactory( InvoiceService )
} )
export class InvoiceService extends AccountingService implements IContext {
    type: Module = INVOICE;
    fieldRenderFunctions: FieldRenderers<AccountingFRF, InvoiceFRF> = {
        ...this.fieldRenderFunctions,
        roundDown: ( value: number ) => Math.floor( value )
    };

    constructor () {
        super();
        this.fieldRenderFunctions.roundDown( 5 );
    }

    onInit() {
        super.onInit();
        console.log( "InvoiveService initialize" );
    }
    onViewInit() { console.log( "InvoiveService onViewInit" ); }
    onContentInit() { console.log( "InvoiveService onContentInit" ); }
    onDestroy() { console.log( "InvoiveService onDestroy" ); }
}