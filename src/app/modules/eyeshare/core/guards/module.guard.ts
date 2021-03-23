import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, Router, ActivatedRoute
} from '@angular/router';
import { EsResolveAsync, EsTimer } from '../helpers/component-decorators';
import { ModuleService } from '../services/module.service';


@Injectable({
  providedIn: 'root',
})
export class ModuleGuard implements CanActivate {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moduleService: ModuleService

  ) { }

  // @EsTimer()
  @EsResolveAsync()
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
  {
    const url = state.url.split("?")[0];

    const current = route.params?.module;
    const valid = this.moduleService.available;

    if (current && !valid.includes(current)) {

      const newCurrent = valid[0];
      this.moduleService.active = newCurrent;

      const urlTree = this.router.createUrlTree(
        [url.replace(current, newCurrent)],
        {
          queryParams: { workflow: route.queryParams?.workflow },
          queryParamsHandling: "merge",
          preserveFragment: true
        }
      );

      return urlTree
    }

    this.moduleService.active = current;

    return true;
  }
}