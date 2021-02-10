import { Component, OnInit } from '@angular/core';
import { AlgoliaService } from 'src/app/modules/root/services/algolia.service';
import { AngularFirestore } from "@angular/fire/firestore";

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

interface suggestion {
  objectID: string,
  state: state,
  title: string,
  description: string,
  category: string,
  stars: number,
  likedBy: string[]
}

enum state {
  approved = "approved",
  declined = "declined"
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  searchValue: string = "";
  suggestions: suggestion[];
  searchIndex: string = "suggestions";

  constructor(
    private algoriaService: AlgoliaService,
    private firestore: AngularFirestore,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.algoriaService.initIndex(this.searchIndex);
    this.search();
  }
  async search(searchValue?: string): Promise<void> {
    if (searchValue != undefined) this.searchValue = searchValue;
    this.suggestions = (await this.algoriaService.index.search(
      this.searchValue, { filters: "state:new" })).hits;
  }

  async approve(id: string) {
    await this.setState(id, state.approved);
  }
  async decline(id: string) {
    await this.setState(id, state.declined);
  }

  async setState(id: string, state: state) {
    try {
      await this.firestore.collection("suggestions").doc(id).set({
        state: state
      }, { merge: true });

      this.algoriaService.initIndex(this.searchIndex);
      await this.search();

      this.suggestions.splice(
        this.suggestions.findIndex(x => x.objectID === id), 1);

      this.openSnackBar(`Suggestion ${state}`);
    } catch (error) {
      console.error(error);
    }
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'close', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  trackSuggestion = (index: number, suggestion: any) =>
    suggestion ? suggestion.objectID : null;
  stars = (amount: number) => Array(amount).fill(0);
}
