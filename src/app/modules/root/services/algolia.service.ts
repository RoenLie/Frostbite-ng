import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import algoliasearch from "algoliasearch";

@Injectable({
  providedIn: 'root'
})
export class AlgoliaService{
  searchClient: any;
  index: any;

  constructor() {
    this.searchClient = algoliasearch(
      environment.algoliaConfig.appKey,
      environment.algoliaConfig.apiKey
    );
  }

  initIndex(index: string) {
    this.index = this.searchClient.initIndex(index);
  }
}
