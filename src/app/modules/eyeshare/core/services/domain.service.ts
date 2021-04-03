import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";

// ----------------------------------------------------------------------------

@Injectable({
  providedIn: "root",
  useFactory: (instance: DomainService | null) =>
    instance || EsServiceAsync(DomainService)
})
export class DomainService {
  private [Symbol.toStringTag] = "DomainService"
  available: any[] = [
    "sys",
    "D365",
    "AX2009",
  ];
  active: string = this.available[0];
}