import { Injectable, Injector } from "@angular/core";
import { EsPortal } from "./es-portal.interface";
import { EsPortalService as int } from "./es-portal-int.service";
import { EsPortalService as cus } from "./es-portal-cus.service";
import { EsPortalService as sys } from "./es-portal-sys.service";
import componentServices from "../../sys/configs/componentServices.json";

const layer = componentServices.EsPortal;

@Injectable({
  providedIn: "root",
  useFactory: (injector: Injector) => {
    return layer.cus ? injector.get(cus)
      : layer.int ? injector.get(int)
        : injector.get(sys);
  },
  deps: [Injector]
})
export class EsPortalService implements EsPortal{
  init() {}
}
