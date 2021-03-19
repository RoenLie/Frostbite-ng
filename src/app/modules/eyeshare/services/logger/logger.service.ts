import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../../sys/helpers/service-factories";

@Injectable({
  providedIn: "root",
  useFactory: () => EsServiceAsync("Logger"),
})
export class LoggerService {
  log() { }
  ngOnInit() { }
}