import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCategoriesComponent } from './admin-categories/list/admin-categories.component';
import { AdminCategoriesNewComponent } from './admin-categories/new/new-admin-category.component';
import { AdminCategoryItemComponent } from './admin-categories/show/admin-category-item.component';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { RatingComponent } from '../rating/rating.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminCategoriesComponent,
    AdminHomeComponent,
    AdminCategoriesNewComponent,
    AdminCategoryItemComponent,
    DialogComponent  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatDialogModule,
    FontAwesomeModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  entryComponents: [DialogComponent]
})
export class AdminModule { }
