import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: IProduct | null = null;

  @Output() onAddToBasket: EventEmitter<IProduct> =
    new EventEmitter<IProduct>();

  @Output() onRemoveToBasket: EventEmitter<number> = new EventEmitter<number>();

  public addToBasket(): void {
    if (this.product) {
      this.onAddToBasket.emit(this.product);
      this.product.isAdded = true;
    }
  }

  public removeFromBasket(): void {
    if (this.product) {
      this.onRemoveToBasket.emit(this.product.id);
      this.product.isAdded = false;
    }
  }
}
