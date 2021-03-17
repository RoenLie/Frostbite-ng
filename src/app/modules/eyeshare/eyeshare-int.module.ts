import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EyeshareCusModule } from './eyeshare-cus.module';
import { LoggerServiceInt } from './services/logger/logger-int.service';


console.log("int module");


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    EyeshareCusModule
  ],
  providers: [ ]
})
export class EyeshareIntModule { }
 