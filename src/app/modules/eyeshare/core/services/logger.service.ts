import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";


@Injectable({
  providedIn: "root",
  useFactory: (instance: LoggerService | null) =>
    instance || EsServiceAsync(LoggerService)
})
export class LoggerService {
  private [Symbol.toStringTag] = "LoggerService"

  constructor() { }
  ngOnInit() {
    console.log("ngOnInit from SYS logger service");
  }

  log() {
    console.log("log from SYS logger service");
  }
}