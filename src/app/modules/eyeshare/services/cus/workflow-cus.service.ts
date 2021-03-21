import { Injectable } from "@angular/core";
import { WorkflowServiceSys } from "../sys/workflow-sys.service";


@Injectable({
  providedIn: "root",
})
export class WorkflowServiceCus extends WorkflowServiceSys {

  workflows: any[] = [
    "Not started",
    "Waiting for approval",
    "Approved",
    "Declined",
    "Transferred",
    "Search"
  ]
}