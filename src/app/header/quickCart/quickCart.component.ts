import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faShoppingBasket, faBars, faSearch, faThLarge, faTimes} from '@fortawesome/free-solid-svg-icons';
import {IQuickCartItem} from '../../../interface/IQuickCartItem';

@Component({
  selector: 'app-quick-cart',
  templateUrl: './quickCart.component.html',
  styleUrls: ['./quickCart.component.less','../../common.styles.less']
})
export class QuickCartComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;
  faBars = faBars;
  faSearch = faSearch;
  faThLarge = faThLarge;
  faTimes = faTimes;

  @Input() quickCartItems: IQuickCartItem[]
  @Output() onCartItemChange = new EventEmitter<IQuickCartItem[]>();
  constructor() { }

  ngOnInit(): void {

  }

  /**Function to remove an item in quick cart */
  removeCartItem(itemId: number){
    const updatedCartItems = this.quickCartItems.filter((item)=> item.id !== itemId)
    this.quickCartItems = updatedCartItems;
    this.onCartItemChange.emit(this.quickCartItems)
  }

  calculateTotalPrice(){
    let total = 0;
    this.quickCartItems && this.quickCartItems.forEach((item) => {
      total += item.quantity * item.price
    })
    return total > 0 ? ', Rs.'+ total+'/-' : '';
  }

}
