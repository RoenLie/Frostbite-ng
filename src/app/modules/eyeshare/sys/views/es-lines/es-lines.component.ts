import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, DoCheck, Injector, OnChanges, OnDestroy, OnInit
} from '@angular/core';
import { LoggerService } from '../../../services/logger/logger.service';

const style = `
  * {
    color: orange;
  }

  button: {
    background-color: blue;
  }
`

@Component({
  selector: 'app-es-lines',
  templateUrl: './es-lines.component.html',
  styleUrls: ['./es-lines.component.scss'],
  styles: [style],
  providers: []
})
export class EsLinesComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor(private logger: LoggerService) {
    (async () => {
      this.logger = await this.logger;
    })();
  }

  async services() {
    return Promise.all([this.logger]);
  }

  async ngOnInit() {
    await this.services();
    // this.logger = await this.logger;
    this.logger.ngOnInit();
  }

  async ngAfterContentInit() {
    await this.services();
    // this.logger.ngOnInit();
    console.log("ngAfterContentInit");
  }
  async ngAfterViewInit() {
    await this.services();
    // this.logger.ngOnInit();
    console.log("ngAfterViewInit");
  }
  ngOnChanges(changes: any) { console.log("ngOnChanges"); }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy(){console.log("ngOnDestroy");}
  checkLogger() { this.logger.log(); }
}
