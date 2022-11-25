import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from './types/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  async getProducts(pageNo:number,category:string): Promise<Product[]> {
    let skip = pageNo*9 - 9;
    let url = ''
    if(category == null){
      url = `https://dummyjson.com/products/?limit=9&skip=${skip}`
    }else{
      url = `https://dummyjson.com/products/category/${category}?limit=9&skip=${skip}`
    }

    let response = await fetch(url);

    if(!response.ok){
      throw new Error("Failed to login");
    }

    let body = await response.json();

    return body.products as Product[];

  }
}
