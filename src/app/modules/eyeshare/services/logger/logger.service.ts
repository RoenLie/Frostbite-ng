import { Injectable } from "@angular/core";
import { asyncFactory } from "../../sys/factories/layer.factory";

@Injectable({
  providedIn: "root",
  useFactory: () => asyncFactory("Logger"),
})
export class LoggerService {
  log() { }
  ngOnInit() { }
}