import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";


@Injectable({
  providedIn: "root",
  useFactory: (instance: TenantService | null) =>
    instance || EsServiceAsync(TenantService)
})
export class TenantService {
  private [Symbol.toStringTag] = "TenantService"
  static [Symbol.hasInstance](instance: any) {
    return this.isPrototypeOf(instance);
  }
  available: any[] = [
    "global"
  ];
  active: string = this.available[0];
}