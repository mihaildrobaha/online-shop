import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryComponent } from './components/products/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryResolver } from './services/category.resolver';
import { ProductResolver } from './services/product.resolver';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'products/:category',
    component: CategoryComponent,
    resolve: { data: CategoryResolver },
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    resolve: { data: ProductResolver },
  },
  { path: '**', redirectTo: '', component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
