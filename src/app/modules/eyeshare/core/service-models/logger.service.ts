import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";

@Injectable({
  providedIn: "root",
  useFactory: (instance: LoggerService | null) =>
    instance || EsServiceAsync("Logger", LoggerService)
})
export class LoggerService {
  log() { }
  ngOnInit() { }
}