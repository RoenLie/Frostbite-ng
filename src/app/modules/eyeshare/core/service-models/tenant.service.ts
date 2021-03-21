import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";


@Injectable({
  providedIn: "root",
  useFactory: (instance: TenantService | null) =>
    instance || EsServiceAsync("TenantService", TenantService)
})
export class TenantService {
  available: any[];
  active: string;
}