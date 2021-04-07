import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { contextFactory, ContextService } from "@eyeshare/core/services/context/context.service";
import { ModuleService } from "@eyeshare/core/services/module.service";

@Injectable( {
   providedIn: 'root',
} )
export class ContextResolverService implements Resolve<any> {
   constructor (
      private contextService: ContextService,
      private moduleService: ModuleService
   ) { }
   resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
      console.log( this.moduleService.active );

      this.contextService = contextFactory( this.moduleService );

      console.log( this.contextService );

      return "";
   }
}