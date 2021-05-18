import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faShoppingBasket, faBars, faSearch, faThLarge, faTimes} from '@fortawesome/free-solid-svg-icons';
import { IQuickCartItem } from 'src/interface/IQuickCartItem';

@Component({
  selector: 'app-quick-cart-item',
  templateUrl: './quickCartItem.component.html',
  styleUrls: ['../../quickCart/quickCart.component.less']
})
export class QuickCartItemComponent implements OnInit {

  @Input() item: IQuickCartItem;
  @Output() onRemoveCartItemCallBack = new EventEmitter<number>();

  faShoppingBasket = faShoppingBasket;
  faBars = faBars;
  faSearch = faSearch;
  faThLarge = faThLarge;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveCartItemClick(itemId: number){
    this.onRemoveCartItemCallBack.emit(itemId)
  }
}
