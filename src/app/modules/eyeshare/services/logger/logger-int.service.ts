import { Injectable } from "@angular/core";
import { LoggerServiceSys } from "./logger-sys.service";

@Injectable({
  providedIn: "root"
})
export class LoggerServiceInt extends LoggerServiceSys  {
  constructor() { super(); }

  log() {
    super.log();
    console.log("I am the INT logger service");
  }

}