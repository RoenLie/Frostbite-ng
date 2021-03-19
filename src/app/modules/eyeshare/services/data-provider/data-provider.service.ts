import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../../sys/helpers/service-factories";

export enum Module {
  invoice = "invoice",
  generalLedger = "generalLedger"
}


@Injectable({
  providedIn: "root",
  useFactory: () => EsServiceAsync("DataProvider"),
})
export class DataProviderService {

  moduleData: any;

  ngOnInit() { }
  data(module: Module) { }
}