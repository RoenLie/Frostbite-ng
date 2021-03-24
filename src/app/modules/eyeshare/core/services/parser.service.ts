import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";

@Injectable({
  providedIn: "root",
  useFactory: (instance: ParserService | null) =>
    instance || EsServiceAsync(ParserService)
})
export class ParserService {
  private [Symbol.toStringTag] = "ParserService"
  static [Symbol.hasInstance](instance: any) {
    return this.isPrototypeOf(instance);
  }
  parse() { console.log("parsing from SYS"); }
}