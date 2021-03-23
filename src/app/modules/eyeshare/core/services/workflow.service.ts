import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";

@Injectable({
  providedIn: "root",
  useFactory: (instance: WorkflowService | null) =>
    instance || EsServiceAsync(WorkflowService)
})
export class WorkflowService {
  private [Symbol.toStringTag] = "WorkflowService"
  available: any[] = [
    "Not started",
    "Waiting for approval",
    "Approved",
    "Declined",
    "Transferred",
  ]
  active: string = this.available[0];
}