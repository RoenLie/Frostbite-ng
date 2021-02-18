import { Injectable } from "@angular/core";
import { EsLinesService as sys } from "./es-lines-sys.service";

@Injectable({
  providedIn: "root"
})
export class EsLinesService extends sys {
  constructor() {
    super();
  }

  init() {
    super.init();
    console.log("EsLines  INT INIT");
  }
}