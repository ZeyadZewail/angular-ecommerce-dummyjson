import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from './types/product.interface';
import { categories } from './product-view/product-view.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  async getProducts(pageNo:number,category:string,searchedKeyword:string): Promise<Product[]> {
    //skip value is used for pagentation
    let skip = (pageNo-1)*9;
    let url = ''

    //deceterminig url to use in fetch
    if(category == null){
      url = `https://dummyjson.com/products/?limit=9&skip=${skip}`
    }else{
      url = `https://dummyjson.com/products/category/${category}?limit=9&skip=${skip}`
    }

    if(searchedKeyword != null){
      url = `https://dummyjson.com/products/search?q=${searchedKeyword}&limit=9&skip=${skip}`;
    }

    let response = await fetch(url);

    if(!response.ok){
      throw new Error("Failed to login");
    }

    let body = await response.json();

    return body.products as Product[];

  }
}
