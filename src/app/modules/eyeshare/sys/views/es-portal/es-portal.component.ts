import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../services/logger/logger.service';
import { ParserService } from '../../../services/parser/parser.service';
import { EsInitialize, EsResolveAsync } from '../../helpers/component-decorators';


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
