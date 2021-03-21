import { Injectable, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { WorkflowService } from "../../core/service-models/workflow.service";


@Injectable({
  providedIn: "root",
})
export class WorkflowServiceSys implements WorkflowService {
  available: any[] = [
    "Not started",
    "Waiting for approval",
    "Approved",
    "Declined",
    "Transferred",
  ]

  active: string = this.available[0];
}