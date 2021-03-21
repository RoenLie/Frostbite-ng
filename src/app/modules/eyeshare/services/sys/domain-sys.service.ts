import { Injectable } from "@angular/core";
import { DomainService } from "../../core/service-models/domain.service";


@Injectable({
  providedIn: "root",
})
export class DomainServiceSys implements DomainService {
  available: any[] = [
    "sys",
    "D365",
    "AX2009",
  ];

  active: string = this.available[0];
}