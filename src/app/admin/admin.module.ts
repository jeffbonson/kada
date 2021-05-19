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

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminCategoriesComponent,
    AdminHomeComponent,
    AdminCategoriesNewComponent,
    AdminCategoryItemComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  entryComponents: [DialogComponent]
})
export class AdminModule { }
