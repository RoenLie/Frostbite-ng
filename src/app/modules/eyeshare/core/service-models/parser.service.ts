import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";

@Injectable({
  providedIn: "root",
  useFactory: async (instance: ParserService | null) =>
    instance || EsServiceAsync("Parser", ParserService)
})
export class ParserService {
  parse() { }
}