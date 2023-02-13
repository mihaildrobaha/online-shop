import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  public error$ = new Subject<string>();

  public handle(error: string) {
    this.error$.next(error);
  }
}
