import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { IProduct } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products$: Observable<IProduct[]> | null = null;
  private subscribe: Subscription | null = null;
  public error: string | null = null;
  public loading: boolean = false;

  constructor(
    private apiService: ApiService,
    private errorService: ErrorService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.apiService.getProducts().pipe(
      tap((value: IProduct[]) => {
        value.forEach((product) => {
          if (this.cartService.cartItems.find((el) => el.id === product.id)) {
            product.isAdded = true;
          } else {
            product.isAdded = false;
          }
        });
        this.loading = false;
      })
    );
    this.checkError();
  }

  private checkError(): void {
    this.subscribe = this.errorService.error$.subscribe((error: string) => {
      this.error = error;
      console.log(this.error);
    });
  }

  public addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }

  public removeFromCart(id: number): void {
    this.cartService.removeFromCart(id);
  }

  public hideError(EmptyString: string): void {
    this.error = EmptyString;
  }

  ngOnDestroy(): void {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }
}
