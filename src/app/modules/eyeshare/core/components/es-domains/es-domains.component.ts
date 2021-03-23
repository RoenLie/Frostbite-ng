import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EsResolveAsync } from '../../helpers/component-decorators';
import { DomainService } from '../../services/domain.service';


@Component({
  selector: 'es-domains',
  templateUrl: './es-domains.component.html',
  styleUrls: ['./es-domains.component.scss']
})
export class EsDomainsComponent implements OnInit {

  constructor(
    public domainService: DomainService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  @EsResolveAsync()
  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.domainService.active = params?.workflow;
    // })
  }

  activate(domain: string) {
    if (domain == this.domainService.active) return;

    const previous = this.domainService.active;

    this.domainService.active = domain;

    const url = this.router.url.split("?")[0].replace(previous, domain);

    const urlTree = this.router.createUrlTree([url]);
    
    this.router.navigateByUrl(urlTree);
  }
}
