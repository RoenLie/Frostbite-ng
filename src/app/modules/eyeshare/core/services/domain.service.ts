import { Injectable } from "@angular/core";
import { EsServiceFactory } from "../helpers/service-factories";
// ----------------------------------------------------------------------------


@Injectable({
  providedIn: "root",
  useFactory: () => EsServiceFactory(DomainService)
})
export class DomainService {
  private [Symbol.toStringTag] = "DomainService";
  private static [Symbol.hasInstance](instance: any) {
    return this.isPrototypeOf(instance);
  }
  available: string[] = [
    "SYS",
    "D365",
    "AX2009",
  ];
  active: string = this.available[0];
}