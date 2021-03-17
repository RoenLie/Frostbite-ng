import { Component, Host, OnInit, Optional, SkipSelf } from '@angular/core';
import { EsPortalService } from '../../../injection/es-portal/es-portal-sys.service';


@Component({
  selector: 'app-es-portal',
  templateUrl: './es-portal.component.html',
  styleUrls: ['./es-portal.component.scss']
})
export class EsPortalComponent implements OnInit {

  constructor(private esPortalService: EsPortalService) { }

  ngOnInit(): void {
    console.log(this.esPortalService);
    
    this.esPortalService.init();
  }

}
