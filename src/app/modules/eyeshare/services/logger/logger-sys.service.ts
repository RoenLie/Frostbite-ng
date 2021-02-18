import { Logger } from "./logger.interface";
import { Injectable } from "@angular/core";
import { ServiceLayer, SERVICE_LAYER } from "./logger.token";

@Injectable({
  providedIn: "root"
})
export class LoggerServiceSys implements Logger {
  constructor() {
  }

  log() {
    console.log("I am the sys logger service");
  }

}