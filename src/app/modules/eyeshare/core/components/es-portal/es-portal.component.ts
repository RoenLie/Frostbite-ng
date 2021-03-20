import { Component, OnInit } from '@angular/core';
import { EsInitialize, EsResolveAsync } from '../../helpers/component-decorators';
import { ParserService } from '../../service-models/parser.service';


@EsInitialize
@Component({
  selector: 'app-es-portal',
  templateUrl: './es-portal.component.html',
  styleUrls: ['./es-portal.component.scss'],
  styles: [],
})
export class EsPortalComponent implements OnInit {
  constructor(private parser: ParserService) { }

  @EsResolveAsync()
  ngOnInit() {
    this.parser.parse();
  }
}
