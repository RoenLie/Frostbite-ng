import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreePortalRoutingModule } from './three-first.r.module';
import { ThreeFirstComponent } from "./three-first.component";


@NgModule({
  imports: [
    CommonModule,
    ThreePortalRoutingModule
  ],
  declarations: [ThreeFirstComponent]
})
export class ThreeModule { }
