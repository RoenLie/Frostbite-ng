import { EsLines } from "./es-lines.interface";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EsLinesService implements EsLines {
  constructor() { }

  init() { console.log("EsLines  SYS INIT"); }
}