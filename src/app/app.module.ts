import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from "./modules/root/modules/layout.module";

import { AppComponent } from './app.component';
import { AuthService } from './modules/root/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrandService } from "@/app/modules/root/services/brand.service";
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    HotToastModule.forRoot(),
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
  constructor ( private brandService: BrandService ) {
    this.brandService.navTitle = "Frostbite";
    this.brandService.logoPath = "assets/svg/frostbite_logo.svg";
  }
}
