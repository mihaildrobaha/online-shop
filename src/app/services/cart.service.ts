import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCartComponent } from '../components/cart/dialog-cart/dialog-cart.component';
import { IProduct } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems: IProduct[] = [];
  public id: number = 0;

  constructor(public dialog: MatDialog) {}

  public addToCart(product: IProduct): void {
    this.cartItems.push(product);
  }

  public showDetails(id: number): void {
    this.id = id;
    this.dialog.open(DialogCartComponent);
  }

  public removeFromCart(id: number): void {
    this.cartItems = this.cartItems.filter(
      (product: IProduct) => product.id !== id
    );
  }
}
