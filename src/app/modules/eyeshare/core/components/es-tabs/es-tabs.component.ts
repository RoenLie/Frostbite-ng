import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EsResolveAsync } from '../../helpers/component-decorators';
import { WorkflowService } from '../../services/workflow.service';


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

  @EsResolveAsync()
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
