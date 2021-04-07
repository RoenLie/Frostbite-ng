import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "../helpers/service-factories";


@EsBaseInjector()
@Injectable( {
  providedIn: "root",
  useFactory: () => EsServiceFactory( ParserService )
} )
export class ParserService {
  parse() { console.log( "parsing from SYS" ); }
}