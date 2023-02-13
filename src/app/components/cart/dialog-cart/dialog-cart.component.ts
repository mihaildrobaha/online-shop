import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.scss'],
})
export class DialogCartComponent {
  constructor(private cartService: CartService) {}

  public products: IProduct[] = [];

  public id: number = 0;

  ngOnInit() {
    this.products = this.cartService.cartItems;
    this.id = this.cartService.id;
  }
}
