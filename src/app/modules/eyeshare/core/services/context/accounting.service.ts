import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "@eyeshare/core/helpers/service-factories";
import { ContextService, IContext } from "@eyeshare/core/services/context/context.service";
import { ACCOUNTING, Module } from "@eyeshare/core/services/module.service";


@EsBaseInjector()
@Injectable( {
    providedIn: "root",
    useFactory: () => EsServiceFactory( AccountingService )
} )
export class AccountingService implements IContext {
    type: Module = ACCOUNTING;
    constructor () { }
    onInit() { console.log( "AccountingService initialize" ); }
    onViewInit() { console.log( "AccountingService onViewInit" ); }
    onContentInit() { console.log( "AccountingService onContentInit" ); }
    onDestroy() { console.log( "AccountingService onDestroy" ); }
}