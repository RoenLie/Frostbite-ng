import { Injectable } from '@angular/core';
import algoliasearch from "algoliasearch";

@Injectable({
  providedIn: 'root'
})
export class AlgoliaService{

  searchClient: any;
  index: any;

  constructor() {
    this.searchClient = algoliasearch('EKAHBC9ACO', '770eb8cc97b847636e84960c9e3bc71e');
  }

  initIndex(index: string) {
    this.index = this.searchClient.initIndex(index);
  }
}
