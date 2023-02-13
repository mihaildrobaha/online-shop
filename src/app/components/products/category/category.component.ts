import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  public products: IProduct[] | null = null;
  public subscription: Subscription | null = null;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data) => {
      this.products = data['data'];
    });
  }

  public addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }

  public removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
