import { Injectable } from "@angular/core";
import { WorkflowService } from "../../core/service-models/workflow.service";


@Injectable({
  providedIn: "root",
})
export class WorkflowServiceSys implements WorkflowService {

  workflows: any[] = [
    "Not started",
    "Waiting for approval",
    "Approved",
    "Declined",
    "Transferred",
  ]
}