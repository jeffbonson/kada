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
  validation: {message:string, valid: boolean} = {message:'', valid: false};
  formChange = false;

  ngOnInit(): void {
  }

  newCategory(): void {
    this.category = new Category();
  }

  save() {
    console.log(this.category)
    this.categoryService.createCategory(this.category);
    this.category = new Category();
    this.close();
  }

  onSubmit(){
    this.save();
  }

  close() {
    this.dialogRef.close();

  }

  onKeyUpEvent(event: any){
    const name = event.target.value;
    this.formChange = true;
    if(name.length <= 0){
      this.validation = {message: 'Please enter a name', valid: false}
    }else{
      this.validation = {message: '', valid: true}
      this.category.name = name;
    }
  }

}
