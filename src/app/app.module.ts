import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';

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
import { NewComponent } from './modules/qualihr/views/new/new.component';
import { ListComponent } from './modules/qualihr/views/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material design spesific
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
// ---


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
    NewComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),

    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [
    LayoutService,
    FirebaseService,
    AuthService,
    FirestoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
