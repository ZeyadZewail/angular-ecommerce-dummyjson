import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductViewComponent } from './Products/product-view/product-view.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'login',component:LoginComponent},
  {path: 'products',component:ProductViewComponent},
  {path: 'products/category/:category',component:ProductViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
