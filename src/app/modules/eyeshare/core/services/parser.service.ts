import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";

@Injectable({
  providedIn: "root",
  useFactory: (instance: ParserService | null) =>
    instance || EsServiceAsync(ParserService)
})
export class ParserService {
  [Symbol.toStringTag] = "ParserService"
  parse() { console.log("parsing from SYS"); }
}