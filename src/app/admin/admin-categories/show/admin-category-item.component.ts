import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { faEdit, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/shared/categories.service';


@Component({
  selector: 'app-admin-category-item',
  templateUrl: './admin-category-item.component.html',
  styleUrls: ['./admin-category-item.component.less','../../../../app/common.styles.less']
})
export class AdminCategoryItemComponent implements OnInit {

  @Input() category: Category;
  faEdit = faEdit;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  constructor(private categoryService: CategoryService) { }
  categories = [];


  ngOnInit(): void {
  }

  inHeaderToggle(category :Category){
    console.log(category)
    this.categoryService.toggleInHeader(category)
  }


}
