import { Component, OnInit } from '@angular/core';
import { EsResolveAsync } from '../../helpers/component-decorators';
import { WorkflowService } from '../../service-models/workflow.service';

@Component({
  selector: 'es-tabs',
  templateUrl: './es-tabs.component.html',
  styleUrls: ['./es-tabs.component.scss']
})
export class EsTabsComponent implements OnInit {

  workflows: string[];

  constructor(public workflowService: WorkflowService) { }

  @EsResolveAsync()
  ngOnInit() {
    this.workflows = this.workflowService.workflows;
  }
}
