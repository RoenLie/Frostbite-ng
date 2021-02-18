import { Component, Injector, OnInit } from '@angular/core';
import { EsLinesService } from '../../../injection/es-lines/es-lines-sys.service';
import { EsLinesService as int } from '../../../injection/es-lines/es-lines-int.service';
import { EsLinesService as cus } from '../../../injection/es-lines/es-lines-cus.service';

import { layerProvider, style } from "../../factories/layer.factory";
import componentServices from "../../configs/componentServices.json";

// const style = `
//   * {
//     color: orange;
//   }
// `



@Component({
  selector: 'app-es-lines',
  templateUrl: './es-lines.component.html',
  styleUrls: ['./es-lines.component.scss'],
  styles: [style],
  providers: [layerProvider(componentServices.EsLines, [EsLinesService, int, cus])]
})
export class EsLinesComponent implements OnInit {

  constructor(private selfService: EsLinesService) { }

  async ngOnInit() {

    this.selfService.init();
  }

}
