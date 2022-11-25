import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects"
import { catchError, from, map, of, switchMap } from "rxjs";
import { ProductService } from "../product-service.service";
import * as ProductActions from './actions'

@Injectable()
export class productsEffects{
    getProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.getProducts),switchMap((action)=> 
            from(this.productService.getProducts(action.pageNo,action.category)).pipe(
                map((products)=> ProductActions.getProductsSuccess({products})),
                catchError((error)=> of(ProductActions.getProductsFailure({error})))
            ))
        )
    )
    constructor(private actions$:Actions,private productService:ProductService){}
}