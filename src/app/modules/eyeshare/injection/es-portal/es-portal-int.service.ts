import { Injectable } from "@angular/core";
import { EsPortalService as sys} from "./es-portal-sys.service";



@Injectable({
  providedIn: "platform"
})
export class EsPortalService extends sys {
  constructor() {
    super();
  }

  init() {
    super.init();
    console.log("EsPortalService  INT INIT");
  }
}