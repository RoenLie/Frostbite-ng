import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyComponent],
  // entryComponents: [LazyComponent]
})
export class LazyModule {
  // Define entry property to access entry component in loader service
  static entry = LazyComponent;
}