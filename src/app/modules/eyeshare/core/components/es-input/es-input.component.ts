import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, NgModule, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { EsBaseComponent } from "../../helpers/component-decorators";


@EsBaseComponent()
@Component({
  selector: 'es-input',
  templateUrl: './es-input.component.html',
  styleUrls: ['./es-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, multi: true,
      useExisting: forwardRef(() => EsInputComponent)
    }
  ]
})
export class EsInputComponent implements OnInit, ControlValueAccessor {
  static [Symbol.hasInstance](instance: any) { return this.isPrototypeOf(instance); }
  @Input() label: string;
  public value = new FormControl("");
  private onChange: (value: string) => void;
  private onTouched: () => void;
  constructor() { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  };

  writeValue(obj: any) {
    const [value] = obj;
    this.value.setValue(value);
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.value.disable();
      return;
    }

    this.value.enable();
  }

  ngOnInit(): void { }

  doInput() {
    this.onChange(this.value.value);
  }

  doBlur() {
    this.onTouched();
  }
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EsInputComponent
  ],
  providers: [],
  exports: []
})
export class EsInputModule { }
