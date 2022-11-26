import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './Products/cart/cart.component';
import { ProductViewComponent } from './Products/product-view/product-view.component';

const routes: Routes = [
  {path: '',component:ProductViewComponent},
  {path: 'login',component:LoginComponent},
  {path: 'products',component:ProductViewComponent,canActivate:[AuthGuard]},
  {path: 'products/category/:category',component:ProductViewComponent,canActivate:[AuthGuard]},
  {path: 'products/search',component:ProductViewComponent,canActivate:[AuthGuard]},
  {path: 'cart',component:CartComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
