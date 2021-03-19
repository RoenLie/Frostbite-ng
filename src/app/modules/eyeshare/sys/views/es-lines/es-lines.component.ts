import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit
} from '@angular/core';
import { LoggerService } from '../../../services/logger/logger.service';
import { ParserService } from "../../../services/parser/parser.service";
import { EsComponent } from '../../helpers/es-component.class';

const style = `
  * {
    // color: pink;
  }

  button {
    // background-color: darkgreen;
  }
`;

@Component({
  selector: 'app-es-lines',
  templateUrl: './es-lines.component.html',
  styleUrls: ['./es-lines.component.scss'],
  styles: [style],
  providers: []
})
export class EsLinesComponent extends EsComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(public logger: LoggerService, public parser: ParserService) {
    super(logger, parser);
  }
  async ngOnInit() {
    await this.awaitServices();

    this.parser.parse();
    this.logger.ngOnInit();
  }

  async ngAfterContentInit() {
    await this.awaitServices();
  }
  async ngAfterViewInit() {
    await this.awaitServices();
  }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
}
