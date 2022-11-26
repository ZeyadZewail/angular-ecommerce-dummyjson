import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productReducers } from './store/reducers';
import { ProductViewComponent } from './product-view/product-view.component';
import { EffectsModule } from '@ngrx/effects';
import { productsEffects } from './store/effects';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    ProductViewComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('productsState',productReducers),
    EffectsModule.forFeature([productsEffects])
  ],
  exports: [ProductViewComponent]
})
export class ProductsModule { }
