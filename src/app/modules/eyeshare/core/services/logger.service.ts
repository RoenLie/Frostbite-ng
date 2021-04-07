import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "../helpers/service-factories";


@EsBaseInjector()
@Injectable( {
  providedIn: "root",
  useFactory: () => EsServiceFactory( LoggerService )
} )
export class LoggerService {
  constructor () { }
  ngOnInit() {
    console.log( "ngOnInit from SYS logger service" );
  }

  log() {
    console.log( "log from SYS logger service" );
  }
}