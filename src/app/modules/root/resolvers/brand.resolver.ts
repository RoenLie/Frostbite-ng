import { BrandService } from "@/app/modules/root/services/brand.service";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";


@Injectable( {
   providedIn: 'root',
} )
export class BrandResolverService implements Resolve<any> {
   constructor ( private brandService: BrandService ) { }
   resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
      const { navTitle, logoPath } = route.data?.brand;
      this.brandService.navTitle = navTitle;
      this.brandService.logoPath = logoPath;
   }
}