import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from '../models/interfaces';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  readonly urlWithCategory: string =
    'https://fakestoreapi.com/products/category';

  readonly urlCategory: string = 'https://fakestoreapi.com/products/categories';

  constructor(private http: HttpClient, private cartService: CartService) {}

  public getProductsByCategory(category: string): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(`${this.urlWithCategory}/${category}`)
      .pipe(
        tap((value: IProduct[]) => {
          value.forEach((product: IProduct) => {
            if (this.cartService.cartItems.find((el) => el.id === product.id)) {
              product.isAdded = true;
            } else {
              product.isAdded = false;
            }
          });
        })
      );
  }

  public getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.urlCategory);
  }
}
