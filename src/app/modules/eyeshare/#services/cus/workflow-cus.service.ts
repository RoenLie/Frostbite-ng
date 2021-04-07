import { Injectable } from "@angular/core";
import { WorkflowService } from "../../core/services/workflow.service";
// ----------------------------------------------------------------------------


@Injectable({
  providedIn: "root",
})
export class WorkflowServiceCus extends WorkflowService {
  available: any[] = [
    "Not started",
    "Waiting for approval",
    "Approved",
    "Declined",
    "Transferred",
    "Search"
  ];
}