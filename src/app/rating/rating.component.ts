import { Component, OnInit } from '@angular/core';
import { faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.less','../common.styles.less']
})
export class RatingComponent implements OnInit {
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }
}
