import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './modules/root/views/error404/error404.component';
import { MainComponent } from './modules/root/views/main/main.component';
import { LayoutComponent } from './modules/root/layout/layout/layout.component';
import { TopNavComponent } from './modules/root/layout/layout/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    MainComponent,
    LayoutComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
