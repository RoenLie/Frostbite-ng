import { InjectionToken } from "@angular/core";
export interface ServiceLayer {
  cus?: boolean;
  int?: boolean;
  sys?: boolean;
}

export const ESPORTAL_TOKEN = new InjectionToken("esportal.token", {
  providedIn: "root",
  factory: () => ({
    cus: true,
    int: true,
    sys: true
  })
});