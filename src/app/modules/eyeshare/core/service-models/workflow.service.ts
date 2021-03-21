import { Injectable } from "@angular/core";
import { EsServiceAsync } from "../helpers/service-factories";

@Injectable({
  providedIn: "root",
  useFactory: (instance: WorkflowService | null) =>
    instance || EsServiceAsync("Workflow", WorkflowService)
})
export class WorkflowService {

  workflows: any[];
}