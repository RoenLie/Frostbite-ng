import { InjectionToken } from "@angular/core";
export interface ServiceLayer {
  cus?: boolean;
  int?: boolean;
}

export const SERVICE_LAYER = new InjectionToken<ServiceLayer>("service.layer", {
  providedIn: "root",
  factory: () => ({
    cus: false,
    int: false,
  })
})