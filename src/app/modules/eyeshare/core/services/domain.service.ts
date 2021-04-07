import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "../helpers/service-factories";
// ----------------------------------------------------------------------------


@EsBaseInjector()
@Injectable( {
  providedIn: "root",
  useFactory: () => EsServiceFactory( DomainService )
} )
export class DomainService {
  available: string[] = [
    "SYS",
    "D365",
    "AX2009",
  ];
  active: string = this.available[ 0 ];
}