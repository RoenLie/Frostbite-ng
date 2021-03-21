import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, Router, ActivatedRoute
} from '@angular/router';
import { EsResolveAsync, EsTimer } from '../helpers/component-decorators';
import { DomainService } from '../service-models/domain.service';


@Injectable({
  providedIn: 'root',
})
export class DomainGuard implements CanActivate {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private domainService: DomainService

  ) { }

  // @EsTimer()
  @EsResolveAsync()
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
  {
    const url = state.url.split("?")[0];

    const current = route.params?.domain;
    const valid = this.domainService.available;

    if (current && !valid.includes(current)) {
      this.domainService.active = valid[0];
      const urlTree = this.router.createUrlTree(
        [url.replace(current, valid[0])],
        {
          queryParams: { workflow: route.queryParams?.workflow },
          queryParamsHandling: "merge",
          preserveFragment: true
        }
      );

      return urlTree
    }

    this.domainService.active = current;
    return true;
  }
}