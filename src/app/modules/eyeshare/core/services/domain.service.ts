import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";
// ----------------------------------------------------------------------------


@Injectable({
  providedIn: "root",
  useFactory: () => EsServiceAsync(DomainService)
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