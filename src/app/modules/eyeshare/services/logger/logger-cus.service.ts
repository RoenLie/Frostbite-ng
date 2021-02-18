import { Logger } from "./logger.interface";
import { Injectable } from "@angular/core";
import { LoggerServiceInt } from "./logger-int.service";

@Injectable({
  providedIn: "root"
})
export class LoggerServiceCus extends LoggerServiceInt implements Logger {
  constructor() {
    super();
  }

  log() {
    console.log("I am the CUS logger service");
  }

}