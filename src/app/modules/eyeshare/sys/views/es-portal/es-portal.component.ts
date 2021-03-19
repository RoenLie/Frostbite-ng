import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../../services/logger/logger.service';
import { ParserService } from '../../../services/parser/parser.service';
import { EsComponent } from '../../helpers/es-component.class';


@Component({
  selector: 'app-es-portal',
  templateUrl: './es-portal.component.html',
  styleUrls: ['./es-portal.component.scss'],
  styles: [],
})
export class EsPortalComponent extends EsComponent implements OnInit {

  constructor(private logger: LoggerService, private parser: ParserService) {
    super();
    this.resolveServices(logger);
  }

  async ngOnInit() {
    await this.awaitServices();
    this.logger.ngOnInit();
  }

}
