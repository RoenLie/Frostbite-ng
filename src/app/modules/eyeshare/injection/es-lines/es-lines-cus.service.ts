import { Injectable } from "@angular/core";
import { EsLinesService as int } from "./es-lines-int.service";

@Injectable({
  providedIn: "root"
})
export class EsLinesService extends int {
  constructor() {
    super();
  }

  init() {
    super.init();
    console.log("EsLines  CUS INIT");
  }
}