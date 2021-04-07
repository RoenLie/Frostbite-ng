import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "../helpers/service-factories";


@EsBaseInjector()
@Injectable( {
  providedIn: "root",
  useFactory: () => EsServiceFactory( TenantService )
} )
export class TenantService {
  available: any[] = [
    "global"
  ];
  active: string = this.available[ 0 ];
}