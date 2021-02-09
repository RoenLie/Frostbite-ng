import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"

import { NewComponent } from "./views/new/new.component";
import { ListComponent } from "./views/list/list.component";
import { RouterModule } from '@angular/router';

import { AlgoliaService } from "../root/services/algolia.service";

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewComponent, ListComponent],
  imports: [
    RouterModule.forChild([
      { path: "", redirectTo:"new", component: NewComponent },
      { path: "new", component: NewComponent },
      { path: "list", component: ListComponent }
    ]),

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [AlgoliaService]
})
export class QualihrModule {}