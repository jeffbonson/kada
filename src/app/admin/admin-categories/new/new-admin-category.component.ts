import { Component, OnInit, Inject } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/shared/categories.service';
import { MatDialogRef } from "@angular/material/dialog";
import { DialogComponent } from 'src/app/dialog/dialog.component';
import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-category-new',
  templateUrl: './new-admin-category.component.html',
  styleUrls: ['./new-admin-category.component.less', '../../../common.styles.less']
})
export class AdminCategoriesNewComponent implements OnInit {

  constructor(private categoryService: CategoryService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  category: Category = new Category
  submitted = false;

  ngOnInit(): void {
  }

  newCategory(): void {
    this.submitted = false;
    this.category = new Category();
  }

  save() {
    console.log(this.category)
    this.categoryService.createCategory(this.category);
    this.category = new Category();
    this.close();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  close() {
    this.dialogRef.close();

  }

}
