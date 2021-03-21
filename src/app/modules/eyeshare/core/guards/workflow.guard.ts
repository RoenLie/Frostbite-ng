import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, Router
} from '@angular/router';
import { EsResolveAsync, EsTimer } from '../helpers/component-decorators';
import { WorkflowService } from '../service-models/workflow.service';


@Injectable({ providedIn: 'root' })
export class WorkflowGuard implements CanActivate {

  constructor(private router: Router, private workflowService: WorkflowService) { }

  @EsTimer()
  @EsResolveAsync()
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
  {
    const workflow = route.queryParams?.workflow;
    const validWorkflows = this.workflowService.workflows;

    const url = state.url.split("?")[0];

    if (!workflow || !validWorkflows.includes(workflow)) {
      console.log("missing/invalid workflow");

      const urlTree = this.router.createUrlTree([url], {
        queryParams: { workflow: validWorkflows[0] },
        queryParamsHandling: "merge",
        preserveFragment: true });

      return urlTree;
    }

    return true;
  }
}