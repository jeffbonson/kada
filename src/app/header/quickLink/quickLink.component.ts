import { Component, OnInit } from '@angular/core';
import { faShoppingBasket, faBars, faSearch, faThLarge, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quick-link',
  templateUrl: './quickLink.component.html',
  styleUrls: ['../quickCart/quickCart.component.less']
})
export class QuickLinkComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;
  faBars = faBars;
  faSearch = faSearch;
  faThLarge = faThLarge;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }
}
