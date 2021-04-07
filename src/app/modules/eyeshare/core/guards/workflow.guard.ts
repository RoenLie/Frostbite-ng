import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { WorkflowService } from '../services/workflow.service';


@Injectable({
  providedIn: 'root',
})
export class WorkflowGuard implements CanActivate {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private workflowService: WorkflowService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const workflow = route.queryParams?.workflow;
    const validWorkflows = this.workflowService.available;

    const url = state.url.split("?")[0];

    if (!workflow || !validWorkflows.includes(workflow)) {
      const urlTree = this.router.createUrlTree([url], {
        queryParams: { workflow: validWorkflows[0] },
        queryParamsHandling: "merge",
        preserveFragment: true
      });

      return urlTree;
    }

    return true;
  }
}