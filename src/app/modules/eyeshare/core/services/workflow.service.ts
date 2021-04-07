import { Injectable } from "@angular/core";
import { EsBaseInjector } from "@eyeshare/core/helpers/component-decorators";
import { EsServiceFactory } from "../helpers/service-factories";


@EsBaseInjector()
@Injectable( {
  providedIn: "root",
  useFactory: () => EsServiceFactory( WorkflowService )
} )
export class WorkflowService {
  available: any[] = [
    "Not started",
    "Waiting for approval",
    "Approved",
    "Declined",
    "Transferred",
  ];
  active: string = this.available[ 0 ];
}