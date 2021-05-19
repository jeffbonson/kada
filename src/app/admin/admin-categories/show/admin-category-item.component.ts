import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';


@Component({
  selector: 'app-admin-category-item',
  templateUrl: './admin-category-item.component.html',
  styleUrls: ['./admin-category-item.component.less','../../../../app/common.styles.less']
})
export class AdminCategoryItemComponent implements OnInit {

  @Input() category: Category;

  constructor() { }
  categories = [];

  ngOnInit(): void {
  }


}
