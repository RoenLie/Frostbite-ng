import { Injectable } from "@angular/core";
import { LoggerServiceInt } from "../int/logger-int.service";
// ----------------------------------------------------------------------------


@Injectable({
  providedIn: "root"
})
export class LoggerServiceCus extends LoggerServiceInt {
  constructor() { super(); }
  ngOnInit() {
    super.ngOnInit();
    console.log("ngOnInit from CUS logger service");
  }
  log() {
    super.log();
    console.log("I am the CUS logger service");
  }
}