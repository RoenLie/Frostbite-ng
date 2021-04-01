import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from './three.component';
import { ThreePortalRoutingModule } from './three-portal.r.module';

@NgModule({
  imports: [
    CommonModule,
    ThreePortalRoutingModule
  ],
  declarations: [ThreeComponent]
})
export class ThreeModule { }
