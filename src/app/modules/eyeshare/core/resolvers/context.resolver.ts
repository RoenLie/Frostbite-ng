import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ContextService } from "@eyeshare/core/services/context/context.service";
import { HotToastService } from "@ngneat/hot-toast";


@Injectable( {
   providedIn: 'root',
} )
export class ContextResolverService implements Resolve<any> {
   constructor (
      private contextService: ContextService,
      private toast: HotToastService
   ) { }
   resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
      // this.toast.show( "context: " + this.contextService.value.type.description );
   }
}