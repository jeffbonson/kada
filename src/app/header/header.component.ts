import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { faShoppingBasket, faBars, faSearch, faThLarge, faTimes} from '@fortawesome/free-solid-svg-icons';
import { IQuickCartItem } from 'src/interface/IQuickCartItem';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less','../common.styles.less']
})
export class HeaderComponent implements OnInit {
  faShoppingBasket = faShoppingBasket;
  faBars = faBars;
  faSearch = faSearch;
  faThLarge = faThLarge;
  faTimes = faTimes;
  quickCartItems: IQuickCartItem[] = [];
  categories = [];

  constructor(private ordersService: OrdersService) { }


  setSearch: boolean = false;

  ngOnInit(): void {
    this.quickCartItems  = this.getQuickCartItems();
    this.getCategories();
  }

  getCategories(){
    this.ordersService.getCategories().subscribe((res: DocumentChangeAction<{name: string, active: boolean}>[])  => {
      this.categories = res.map((category)=> category.payload.doc.data());
    });
  }


  /** Function to get the cart items */
  getQuickCartItems(): IQuickCartItem[]{
    return [
      {id: 1, name: 'Organic Carrot 500gms', quantity: 2, price: 50},
      {id: 2, name: 'Premium Sugar 1Kg', quantity: 1, price: 50},
      {id: 3, name: 'Watermelon 2Kgs', quantity: 1, price: 100}
    ]
  }

  updateCartItems(cartItems: IQuickCartItem[]){
    this.quickCartItems = cartItems;
  }

  onSearchClick(){
    this.setSearch = !this.setSearch;
  }
}
