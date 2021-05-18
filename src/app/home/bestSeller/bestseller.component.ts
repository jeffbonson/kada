import { Component, OnInit } from '@angular/core';
import { faThLarge, faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-best-seller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.less','../../common.styles.less']
})
export class BestsellerComponent implements OnInit {
  faThLarge = faThLarge;
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }
}
