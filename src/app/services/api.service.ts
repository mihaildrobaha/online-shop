import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IProduct } from '../models/interfaces';
import { CartService } from './cart.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly url: string = 'https://fakestoreapi.com/products';

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private cartService: CartService
  ) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.url)
      .pipe(catchError(this.errorHanler.bind(this)));
  }

  public getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}`).pipe(
      tap((product: IProduct) => {
        if (
          this.cartService.cartItems.find(
            (el: IProduct) => el.id === product.id
          )
        ) {
          product.isAdded = true;
        } else {
          product.isAdded = false;
        }
      })
    );
  }

  public errorHanler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
