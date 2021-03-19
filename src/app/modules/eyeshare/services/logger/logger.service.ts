import { Injectable } from "@angular/core";
import { asyncService } from "../../sys/helpers/asyncService.factory";

@Injectable({
  providedIn: "root",
  useFactory: () => asyncService("Logger"),
})
export class LoggerService {
  log() { }
  ngOnInit() { }
}