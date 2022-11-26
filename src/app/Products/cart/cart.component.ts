import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { cartSelector } from '../store/selectors';
import { Product } from '../types/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cart$:Observable<Product[]>;
  count= 0;

  constructor(private store:Store<AppStateInterface>){
    this.cart$= store.select(cartSelector);

    this.cart$.subscribe((val)=>{
      return this.count=val.length
    })
  }

  getCount():number{
    return this.count
  }
  
}
