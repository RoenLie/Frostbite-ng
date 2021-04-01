import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EsInitialize, EsResolveAsync } from '../../helpers/component-decorators';
import { WorkflowService } from '../../services/workflow.service';


@EsInitialize
@Component({
  selector: 'es-tabs',
  templateUrl: './es-tabs.component.html',
  styleUrls: ['./es-tabs.component.scss']
})
export class EsTabsComponent implements OnInit {

  constructor(
    public workflowService: WorkflowService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.workflowService.active = params?.workflow;
    })
  }

  activate(workflow: string) {
    this.workflowService.active = workflow;

    const urlTree = this.router.createUrlTree([], {
      queryParams: { workflow: this.workflowService.active },
      queryParamsHandling: "merge",
      preserveFragment: true
    });
    
    this.router.navigateByUrl(urlTree);
  }
}
