import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "@eyeshare/core/helpers/service-factories";
import { IContext } from "@eyeshare/core/services/context/context.service";
import { InvoiceService } from "@eyeshare/core/services/context/invoice.service";
import { ARCHIVE, Module } from "@eyeshare/core/services/module.service";


@EsBaseInjector()
@Injectable( {
    providedIn: "root",
    useFactory: () => EsServiceFactory( ArchiveService )
} )
export class ArchiveService extends InvoiceService implements IContext {
    type: Module = ARCHIVE;
    constructor () { super(); }

    onInit() {
        super.onInit();
        console.log( "ArchiveService initialize" );
    }
    onViewInit() { console.log( "ArchiveService onViewInit" ); }
    onContentInit() { console.log( "ArchiveService onContentInit" ); }
    onDestroy() { console.log( "ArchiveService onDestroy" ); }
}