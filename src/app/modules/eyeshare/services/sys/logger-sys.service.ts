import { Injectable } from "@angular/core";
import { LoggerService } from "../../core/service-models/logger.service";

@Injectable({
  providedIn: "root",
})
export class LoggerServiceSys implements LoggerService {
  constructor() { }

  ngOnInit() {
    console.log("ngOnInit from SYS logger service");
  }

  log() {
    console.log("log from SYS logger service");
  }
}