import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";

export enum Module {
  invoice = "invoice",
  generalLedger = "generalLedger"
}


@Injectable({
  providedIn: "root",
  useFactory: (instance: DataProviderService | null) =>
    instance || EsServiceAsync("DataProvider", DataProviderService),
})
export class DataProviderService {

  moduleData: any;

  ngOnInit() { }
  data(module: Module) { }
}