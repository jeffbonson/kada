import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { CategoryService } from 'src/app/shared/categories.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdminCategoriesNewComponent } from '../new/new-admin-category.component';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.less','../../../../app/common.styles.less']
})
export class AdminCategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService, private matDialog: MatDialog) { }
  categories = [];
  faPlus = faPlus;

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((res: DocumentChangeAction<{name: string, active: boolean}>[])  => {
      this.categories = res.map(c =>
        ({ key: c.payload.doc.id, ...c.payload.doc.data() }));
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { name: "some name"};
    dialogConfig.panelClass = 'custom-modalbox'
    this.matDialog.open(AdminCategoriesNewComponent, dialogConfig);
  }

}
