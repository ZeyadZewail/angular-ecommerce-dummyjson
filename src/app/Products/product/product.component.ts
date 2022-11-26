import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Product } from '../types/product.interface';
import * as ProductActions from '../store/actions'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()
  product:Product = {} as Product;

  constructor(private store:Store<AppStateInterface>){}
  
  //simply calls the add to cart action and passes it, the product
  addToCart(product:Product){
    this.store.dispatch(ProductActions.addToCart({product:product}));
  }
}
