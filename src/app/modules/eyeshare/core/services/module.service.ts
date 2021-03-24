import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";

@Injectable({
  providedIn: "root",
  useFactory: (instance: ModuleService | null) =>
    instance || EsServiceAsync(ModuleService)
})
export class ModuleService {
  private [Symbol.toStringTag] = "ModuleService"
  static [Symbol.hasInstance](instance: any) {
    return this.isPrototypeOf(instance);
  }
  available: any[] = [
    "invoice",
    "generalledger",
    "purchaseorder",
    "archive"
  ];
  active: string = this.available[0];
}