import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class ProductViewComponent{
  isloading$: Observable<boolean>;
  products$: Observable<Product[]>;
  pageNo = 1;
  selectedCategory: null | string;

  categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ];


  constructor(private store:Store<AppStateInterface>,private route:ActivatedRoute,private router:Router){
    this.isloading$ = this.store.select(isLoadingSelector);
    this.products$ = this.store.select(productsSelector);
    this.selectedCategory = null;
    
    route.queryParams.subscribe(val => { 
      this.initalize();
    });
    route.paramMap.subscribe(val => { 
      this.initalize();
    });
  }
  
  initalize():void{
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

  navigatePage(page:number){
    if(this.selectedCategory === null){
      this.router.navigate(['/products'],{queryParams:{page:page}});
    }else{
      this.router.navigate([`/products/category/${this.selectedCategory}`],{queryParams:{page:page}});
    }
  }
  
  navigateCategory(category:string){
    this.router.navigate([`/products/category/${category}`],{queryParams:{page:1}});
  }

}
