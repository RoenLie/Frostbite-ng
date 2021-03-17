import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyeshareIntModule } from './eyeshare-int.module';
import { EyeshareRouterModule } from './eyeshare-routing.module';
import { LoggerServiceSys } from './services/logger/logger-sys.service';


console.log("sys module");


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    EyeshareRouterModule,
  ],
  providers: [ ]
})
export class EyeshareModule { }
