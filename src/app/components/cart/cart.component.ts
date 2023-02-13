import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartProducts: IProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProducts = this.cartService.cartItems;
  }

  public checkTotalPrice(): number {
    return this.cartProducts.reduce((acc, next) => acc + next.price, 0);
  }

  public removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
    this.cartProducts = this.cartProducts.filter(
      (product: IProduct) => product.id !== id
    );
  }

  public showDetails(id: number): void {
    this.cartService.showDetails(id);
  }
}
