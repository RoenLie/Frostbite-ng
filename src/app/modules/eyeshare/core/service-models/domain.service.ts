import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";


@Injectable({
  providedIn: "root",
  useFactory: (instance: DomainService | null) =>
    instance || EsServiceAsync("DomainService", DomainService)
})
export class DomainService {
  available: any[];
  active: string;
}