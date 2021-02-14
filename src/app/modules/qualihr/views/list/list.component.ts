import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { AlgoliaService } from 'src/app/modules/root/services/algolia.service';
import { AngularFirestore } from "@angular/fire/firestore";

import { MatSnackBar } from '@angular/material/snack-bar';

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
  searchIndex: string = "suggestions";
  suggestions: suggestion[];
  subjectModel: BehaviorSubject<string> = new BehaviorSubject("");

  trackSuggestion = (index: number, suggestion: any) =>
    suggestion ? suggestion.objectID : null;
  stars = (amount: number) => Array(amount).fill(0);

  constructor(
    private algoriaService: AlgoliaService,
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.algoriaService.initIndex(this.searchIndex);

    this.subjectModel.pipe(debounceTime(250)).subscribe(async searchValue => {
      this.suggestions = await this.search(searchValue);
    })
  }
  async search(searchValue: string = "", cacheable: boolean = false): Promise<suggestion[]> {
    return (await this.algoriaService.index.search(
      searchValue, { filters: "state:new", cacheable: cacheable })).hits;
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
      this.suggestions = await this.search(this.subjectModel.value);

      this.suggestions.splice(
        this.suggestions.findIndex(x => x.objectID === id), 1);

      this.openSnackBar(`Suggestion ${state}`);
    } catch (error) {
      console.error(error);
    }
  }
  openSnackBar(msg: string) {
    this.snackBar.open(msg, 'close', {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
}
