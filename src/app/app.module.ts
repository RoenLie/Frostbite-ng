import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { Error404Component } from './modules/root/views/error404/error404.component';
import { MainComponent } from './modules/root/views/main/main.component';
import { LayoutComponent } from './modules/root/layout/layout.component';

import { LayoutService } from "./modules/root/layout/layout.service";
import { LayoutDirective } from "./modules/root/layout/layout.directive";

import { DefaultComponent } from './modules/root/layout/default/default.component';
import { EnigmaComponent } from './modules/root/layout/enigma/enigma.component';
import { NavTopComponent } from './modules/root/layout/default/nav-top/nav-top.component';
import { LeftComponent } from './modules/root/layout/default/nav-top/left/left.component';
import { CenterComponent } from './modules/root/layout/default/nav-top/center/center.component';
import { RightComponent } from './modules/root/layout/default/nav-top/right/right.component';

import { FirebaseService } from "./modules/root/services/firebase.service";
import { FirestoreService } from "./modules/root/services/firestore.service";
import { AuthService } from "./modules/root/services/auth.service";
import { FirebaseModule } from "./modules/root/modules/firebase.module";

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    MainComponent,
    LayoutComponent,
    LayoutDirective,
    DefaultComponent,
    EnigmaComponent,
    NavTopComponent,
    LeftComponent,
    CenterComponent,
    RightComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FirebaseModule,
    AngularSvgIconModule.forRoot(),

    MatProgressSpinnerModule,
  ],
  providers: [
    LayoutService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
