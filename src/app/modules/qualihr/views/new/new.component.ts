import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  categories: any[];
  suggestionForm: any = {
    category: "",
    title: "",
    description:""
  };
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });

    this.categories = [
      {value: "office", viewValue: "Office"},
      {value: "recreational", viewValue: "Recreational"},
      {value: "leisure", viewValue: "Leisure"},
      {value: "tasks", viewValue: "Tasks"},
      {value: "community", viewValue: "Community"},
      {value: "other", viewValue: "Other"},
    ]
  }

  submitSuggestion() {
    console.log(this.suggestionForm);

    const form: HTMLFormElement | null = document.querySelector("#suggestionForm")
    if (!form) {
      this.openSnackBar("Could not find form element!");
      return;
    }

    let isValid = true;

    const obj = this.suggestionForm;
    for (const key in obj) {
      const val = obj[key];
      if (!val) isValid = false;
    }

    if (!isValid) {
      this.openSnackBar("Invalid form input!");
      return;
    }

    for (const key in obj) obj[key] = "";
    form.reset();

    this.openSnackBar("Suggestion submitted!");
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
