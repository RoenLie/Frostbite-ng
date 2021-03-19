import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, DoCheck, Injector, OnChanges, OnDestroy, OnInit
} from '@angular/core';
import { LoggerService } from '../../../services/logger/logger.service';
import { ParserService } from '../../../services/parser/parser.service';
import { EsComponent } from '../../helpers/es-component.class';

const style = `
  * {
    color: orange;
  }

  button {
    background-color: red;
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

  constructor(private logger: LoggerService, private parser: ParserService) {
    super(logger, parser);
  }
  async ngOnInit() {
    await this.awaitServices();

    this.parser.parse();
    this.logger.ngOnInit();
  }

  async ngAfterContentInit() {
    await this.awaitServices();
    console.log("ngAfterContentInit");
  }
  async ngAfterViewInit() {
    await this.awaitServices();
    console.log("ngAfterViewInit");
  }
  ngOnChanges(changes: any) { console.log("ngOnChanges"); }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { console.log("ngOnDestroy"); }
  checkLogger() { this.logger.log(); }
}
