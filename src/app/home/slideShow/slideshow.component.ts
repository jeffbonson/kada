import { Component, OnInit } from '@angular/core';
import { faThLarge} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-slide-show',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.less','../../common.styles.less']
})
export class SlideShowComponent implements OnInit {
  faThLarge = faThLarge;

  constructor() { }

  ngOnInit(): void {
  }

  getTopItems(): {name: string, image: string}[] {
    return [
      {name: 'Apple', image: 'default.jpg'},
      {name: 'Orange', image: 'default.jpg'},
      {name: 'Watermelon', image: 'default.jpg'},
      {name: 'Tomato', image: 'default.jpg'},
      {name: 'Carrot', image: 'default.jpg'},
      {name: 'Cake', image: 'default.jpg'},
      {name: 'Bread', image: 'default.jpg'},
      {name: 'Sugar', image: 'default.jpg'},
    ]
  }
}
