import { Injectable, Injector } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { contextFactory, ContextService } from "@eyeshare/core/services/context/context.service";
import { ModuleService } from "@eyeshare/core/services/module.service";


@Injectable( {
   providedIn: 'root',
} )
export class ContextResolverService implements Resolve<any> {
   constructor (
      private contextService: ContextService,
      private moduleService: ModuleService,
      private injector: Injector
   ) { }
   resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
      this.contextService.module = contextFactory( this.moduleService, this.injector );
   }
}