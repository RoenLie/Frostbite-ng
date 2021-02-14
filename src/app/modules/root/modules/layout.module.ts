import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from "@angular/router";

import { LayoutDirective } from "../layout/layout.directive";
import { LayoutService } from "../layout/layout.service";
import { LayoutComponent } from '../layout/layout.component';
import { DefaultLayoutService } from "../layout/default/default.service";

import { MenuService } from "../services/menu.service";
import { MenuComponent } from "../layout/default/nav-left/menu/menu.component";

import { MainComponent } from "../views/main/main.component";

import { EnigmaComponent } from '../layout/enigma/enigma.component';
import { DefaultComponent } from '../layout/default/default.component';
import { NavLeftComponent } from '../layout/default/nav-left/nav-left.component';
import { NavRightComponent } from '../layout/default/nav-right/nav-right.component';
import { NavTopComponent } from '../layout/default/nav-top/nav-top.component';
import { LeftComponent } from '../layout/default/nav-top/left/left.component';
import { CenterComponent } from '../layout/default/nav-top/center/center.component';
import { RightComponent } from '../layout/default/nav-top/right/right.component';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    LayoutDirective,
    LayoutComponent,
    DefaultComponent,
    EnigmaComponent,
    NavRightComponent,
    NavLeftComponent,
    NavTopComponent,
    LeftComponent,
    CenterComponent,
    RightComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LayoutComponent,
  ], 
  providers: [
    LayoutService,
    MenuService,
    DefaultLayoutService
  ],
})
export class LayoutModule {  }


