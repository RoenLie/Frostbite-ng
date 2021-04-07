import { Injectable } from "@angular/core";
import { LoggerService } from "../../core/services/logger.service";
// ----------------------------------------------------------------------------


@Injectable({
  providedIn: "root"
})
export class LoggerServiceInt extends LoggerService {
  constructor() { super(); }
  log() {
    super.log();
    console.log("I am the INT logger service");
  }
}