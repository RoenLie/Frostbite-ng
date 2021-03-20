import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../../core/helpers/service-factories";
import { DataProviderService, Module } from "../../core/service-models/data-provider.service";


@Injectable({
  providedIn: "root",
})
export class DataProviderServiceSys implements DataProviderService {

  moduleData: any = {
    invoice: [
      [0,1,2,3,4],
      [5,6,7,8,9],
      [10,11,12,13,14],
      [15,16,17,18,19],
    ],
    generalLedger :[
      [20,21,22,23,24],
      [25,26,27,28,29],
      [30,31,32,33,34],
      [35,36,37,38,39],
    ]
  }

  ngOnInit() { }

  data(module: Module) {
    return this.moduleData[module];
  }
}