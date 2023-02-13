import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { IProduct } from '../models/interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<IProduct> {
  constructor(private apiService: ApiService, private route: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<IProduct> {
    return this.apiService.getProduct(route.params?.['id']).pipe(
      catchError(() => {
        this.route.navigate(['products']);
        return EMPTY;
      })
    );
  }
}
