import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { Module } from "@eyeshare/core/services/module.service";
import { EsServiceFactory } from "../helpers/service-factories";


@EsBaseInjector()
@Injectable( {
   providedIn: "root",
   useFactory: () => EsServiceFactory( DataProviderService ),
} )
export class DataProviderService {
   moduleData: any = {
      invoice: [
         [ 0, 1, 2, 3, 4 ],
         [ 5, 6, 7, 8, 9 ],
         [ 10, 11, 12, 13, 14 ],
         [ 15, 16, 17, 18, 19 ],
      ],
      generalLedger: [
         [ 20, 21, 22, 23, 24 ],
         [ 25, 26, 27, 28, 29 ],
         [ 30, 31, 32, 33, 34 ],
         [ 35, 36, 37, 38, 39 ],
      ]
   };
   ngOnInit() { }
   data( module: Module ) {
      return this.moduleData[ module ];
   }
}