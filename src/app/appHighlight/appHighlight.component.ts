import { Component, OnInit } from '@angular/core';
import { faTruck, faPhone, faRupeeSign, faBriefcase} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-highlight',
  templateUrl: './appHighlight.component.html',
  styleUrls: ['./appHighlight.component.less']
})
export class AppHighlightComponent implements OnInit {
  faTruck = faTruck;
  faPhone = faPhone;
  faRupeeSign = faRupeeSign;
  faBriefcase = faBriefcase;

  constructor() { }

  ngOnInit(): void {
  }
}
