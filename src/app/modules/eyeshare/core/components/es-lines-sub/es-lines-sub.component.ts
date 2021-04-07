import { AfterViewInit, Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EsBaseComponent } from "@eyeshare/core/helpers/component-decorators";
import { LoggerService } from "@eyeshare/core/services/logger.service";


@EsBaseComponent()
@Component( {
    selector: "es-lines-sub",
    templateUrl: "es-lines-sub.component.html",
    styleUrls: [ "es-lines-sub.component.scss" ]
} )
export class EsLinesSubComponent implements OnInit, AfterViewInit {
    @Input() message: string;

    constructor ( private logger?: LoggerService ) { }

    ngOnInit() { }
    ngAfterViewInit() { }
}


@NgModule( {
    imports: [ CommonModule, FormsModule, ],
    declarations: [ EsLinesSubComponent ],
    providers: [],
    exports: []
} )
export class EsLinesSubModule { }
