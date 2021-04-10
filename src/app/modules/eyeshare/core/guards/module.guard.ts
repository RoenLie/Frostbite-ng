import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, Router, ActivatedRoute
} from '@angular/router';
import { Module, ModuleService } from '../services/module.service';


@Injectable( {
  providedIn: 'root',
} )
export class ModuleGuard implements CanActivate {

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    const url = state.url.split( "?" )[ 0 ];

    const current = route.params?.module;
    const available = this.moduleService.available;
    const valid = available.find( x => x.description == current );

    if ( current && !valid ) {
      const newCurrent = available[ 0 ];
      this.moduleService.active.next( newCurrent );

      const urlTree = this.router.createUrlTree(
        [ url.replace( current, newCurrent.description || "" ) ],
        {
          queryParams: { workflow: route.queryParams?.workflow },
          queryParamsHandling: "merge",
          preserveFragment: true
        }
      );

      return urlTree;
    }

    if ( valid?.description != current ) {
      this.moduleService.active.next( valid as Module );
    }

    return true;
  }
}