import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/UI/header/header.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { StartComponent } from './components/start/start.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from './components/product/product.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { CategoryComponent } from './components/products/category/category.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { DialogCartComponent } from './components/cart/dialog-cart/dialog-cart.component';
import { DialogCartItemComponent } from './components/cart/dialog-cart/dialog-cart-item/dialog-cart-item.component';
import { ErrorComponent } from './components/UI/error/error.component';
import { StartCategoryComponent } from './components/start/start-category/start-category.component';
import { BadgeComponent } from './components/UI/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartComponent,
    CartComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductComponent,
    CategoryComponent,
    CartItemComponent,
    DialogCartComponent,
    DialogCartItemComponent,
    ErrorComponent,
    StartCategoryComponent,
    BadgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatDialogModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
