import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { IProduct } from '../models/interfaces';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryResolver implements Resolve<IProduct[]> {
  constructor(
    private route: Router,
    private categoryService: CategoryService
  ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<IProduct[]> {
    return this.categoryService
      .getProductsByCategory(route.params?.['category'])
      .pipe(
        catchError(() => {
          this.route.navigate(['products']);
          return EMPTY;
        })
      );
  }
}
