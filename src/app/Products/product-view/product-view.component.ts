import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as ProductActions from '../store/actions'
import { isLoadingSelector, productsSelector } from '../store/selectors';
import { Product } from '../types/product.interface';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit{
  isloading$: Observable<boolean>;
  products$: Observable<Product[]>;
  pageNo = 1;
  selectedCategory= '';

  constructor(private store:Store<AppStateInterface>,private route:ActivatedRoute){
    this.isloading$ = this.store.select(isLoadingSelector);
    this.products$ = this.store.select(productsSelector);
  }
  
  ngOnInit(): void {
    let page = this.route.snapshot.queryParamMap.get('page');
    this.selectedCategory = this.route.snapshot.paramMap.get('category') as string;
    if(page != null){
      this.pageNo= Number(page);
      if(this.pageNo<1){
        this.pageNo = 1;
      }
    }
    this.store.dispatch(ProductActions.getProducts({pageNo:this.pageNo,category:this.selectedCategory}));
  }


}
