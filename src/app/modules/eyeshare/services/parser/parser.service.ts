import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../../sys/helpers/service-factories";

@Injectable({
  providedIn: "root",
  useFactory: () => EsServiceAsync("Parser"),
})
export class ParserService {
  parse() { }
}