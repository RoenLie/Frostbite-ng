import { Injectable } from "@angular/core";
import { TenantService } from "../../core/service-models/tenant.service";


@Injectable({
  providedIn: "root",
})
export class TenantServiceSys implements TenantService {
  available: any[] = [
    "global"
  ];
  active: string = this.available[0];
}