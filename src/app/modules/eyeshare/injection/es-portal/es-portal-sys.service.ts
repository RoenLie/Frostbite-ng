import { Injectable, Injector, Optional, SkipSelf } from "@angular/core";
import { EsPortal } from "./es-portal.interface";



@Injectable({
  // providedIn: "root",
  providedIn: "platform",
})
export class EsPortalService implements EsPortal {
  constructor() { }

  init() { console.log("EsPortalService  SYS INIT"); }
}