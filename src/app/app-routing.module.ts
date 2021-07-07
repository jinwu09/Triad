import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component'
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';

import { ProductComponent } from './components/product/product.component';
const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login',component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartComponent}
  {path: 'product',component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
