import { Injectable } from "@angular/core";
import { EsPortalService as int } from "./es-portal-int.service";


@Injectable({
  // providedIn: "root"
  providedIn: "platform"
})
export class EsPortalService extends int{
  constructor() {
    super();
  }

  init() {
    super.init();
    console.log("EsPortalService  CUS INIT");
  }
}