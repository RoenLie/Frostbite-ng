import { Injectable } from "@angular/core";
import { DomainService } from "../../core/services/domain.service";
// ----------------------------------------------------------------------------


@Injectable({
  providedIn: "root"
})
export class DomainServiceCus extends DomainService {
  available: string[] = [...this.available, "AX2012"];
  constructor() { super(); }
}