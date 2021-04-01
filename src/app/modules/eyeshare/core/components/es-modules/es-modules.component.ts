import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EsInitialize, EsResolveAsync } from '../../helpers/component-decorators';
import { ModuleService } from '../../services/module.service';


@EsInitialize
@Component({
  selector: 'es-modules',
  templateUrl: './es-modules.component.html',
  styleUrls: ['./es-modules.component.scss']
})
export class EsModulesComponent implements OnInit {

  constructor(
    public moduleService: ModuleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.moduleService.active = params?.workflow;
    // })
  }

  activate(module: string) {
    if (module == this.moduleService.active) return;
    
    const previous = this.moduleService.active;

    this.moduleService.active = module;

    const url = this.router.url.split("?")[0].replace(previous, module);

    const urlTree = this.router.createUrlTree([url]);
    
    this.router.navigateByUrl(urlTree);
  }
}
