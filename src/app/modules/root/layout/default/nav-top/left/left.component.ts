import { DefaultLayoutService } from "@/app/modules/root/layout/default/default.service";
import { BrandService } from "@/app/modules/root/services/brand.service";
import { Component, OnInit } from '@angular/core';


@Component( {
  selector: 'app-nav-top-left',
  templateUrl: './left.component.html',
  styleUrls: [ './left.component.scss' ]
} )
export class LeftComponent implements OnInit {
  constructor (
    public defaultLayoutService: DefaultLayoutService,
    public brandService: BrandService ) { }
  ngOnInit(): void {
  }
}
