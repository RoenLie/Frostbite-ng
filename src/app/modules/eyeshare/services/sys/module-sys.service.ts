import { Injectable } from "@angular/core";
import { ModuleService } from "../../core/service-models/module.service";


@Injectable({
  providedIn: "root",
})
export class ModuleServiceSys implements ModuleService {
  available: any[] = [
    "invoice",
    "generalledger",
    "purchaseorder",
    "archive"
  ];

  active: string = this.available[0];
}