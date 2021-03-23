import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";


@Injectable({
  providedIn: "root",
  useFactory: (instance: TenantService | null) =>
    instance || EsServiceAsync(TenantService)
})
export class TenantService {
  [Symbol.toStringTag] = "TenantService"
  available: any[] = [
    "global"
  ];
  active: string = this.available[0];
}