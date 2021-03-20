import { Injectable } from "@angular/core";
import { ParserService } from "../../core/service-models/parser.service";

@Injectable({
  providedIn: "root",
})
export class ParserServiceSys implements ParserService {
  constructor() { }

  parse() {
    console.log("parsing from SYS");
  }
}