import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TenantService } from '../services/tenant.service';


@Injectable({
  providedIn: 'root',
})
export class TenantGuard implements CanActivate {

  constructor(
    private router: Router,
    private tenantService: TenantService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const url = state.url.split("?")[0];

    const current = route.params?.tenant;
    const valid = this.tenantService.available;

    if (current && !valid.includes(current)) {

      this.tenantService.active = valid[0];
      const urlTree = this.router.createUrlTree(
        [url.replace(current, valid[0])],
        {
          queryParams: { workflow: route.queryParams?.workflow },
          queryParamsHandling: "merge",
          preserveFragment: true
        }
      );

      return urlTree;
    }

    this.tenantService.active = current;

    return true;
  }
}