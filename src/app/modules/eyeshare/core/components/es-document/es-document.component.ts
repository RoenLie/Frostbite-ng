import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContextService } from "@eyeshare/core/services/context/context.service";
import { EsBaseComponent, EsComponentDeps } from '../../helpers/component-decorators';
import { EsInputComponent } from '../es-input/es-input.component';


@EsBaseComponent()
@EsComponentDeps( { directives: [ EsInputComponent ] } )
@Component( {
  selector: 'es-document',
  templateUrl: './es-document.component.html',
  styleUrls: [ './es-document.component.scss' ]
} )
export class EsDocumentComponent implements OnInit {
  document: FormGroup = this.fb.group( {
    value: [ "" ]
  } );

  tabs = [ 'Attachments', 'Information', 'Permissions', 'Log' ];
  selected = new FormControl( 0 );

  constructor (
    private fb: FormBuilder,
    public contextService: ContextService
  ) { }

  ngOnInit() {
    console.log( this.contextService );

    this.contextService;

  }
  submitForm() {
    console.log( this.document.get( "value" ) );
  }

  addTab( selectAfterAdding: boolean ) {
    this.tabs.push( 'New' );

    if ( selectAfterAdding ) {
      this.selected.setValue( this.tabs.length - 1 );
    }
  }

  removeTab( index: number ) {
    this.tabs.splice( index, 1 );
  }
}


@NgModule( {
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    EsDocumentComponent
  ],
  providers: [],
  exports: [ EsDocumentComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
} )
export class EsDocumentModule { }
