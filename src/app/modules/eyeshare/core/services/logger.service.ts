import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";


@Injectable({
  providedIn: "root",
  useFactory: () => EsServiceAsync(LoggerService)
})
export class LoggerService {
  private [Symbol.toStringTag] = "LoggerService"
  static [Symbol.hasInstance](instance: any) {
    return this.isPrototypeOf(instance);
  }

  constructor() { }
  ngOnInit() {
    console.log("ngOnInit from SYS logger service");
  }

  log() {
    console.log("log from SYS logger service");
  }
}