import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";

@Injectable({
  providedIn: "root",
  useFactory: (instance: ModuleService | null) =>
    instance || EsServiceAsync("ModuleService", ModuleService)
})
export class ModuleService {
  available: any[];
  active: string;
}