import { Injectable } from "@angular/core";
import { EsServiceFactory } from "../helpers/service-factories";

// ----------------------------------------------------------------------------

@Injectable({
  providedIn: "root",
  useFactory: () => EsServiceFactory(ParserService)
})
export class ParserService {
  private [Symbol.toStringTag] = "ParserService";
  static [Symbol.hasInstance](instance: any) {
    return this.isPrototypeOf(instance);
  }
  parse() { console.log("parsing from SYS"); }
}