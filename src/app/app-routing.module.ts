import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './Products/cart/cart.component';
import { ProductViewComponent } from './Products/product-view/product-view.component';

const routes: Routes = [
  {path: '',component:ProductViewComponent},
  {path: 'login',component:LoginComponent},
  {path: 'products',component:ProductViewComponent},
  {path: 'products/category/:category',component:ProductViewComponent},
  {path: 'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
