import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProduct } from 'src/app/models/interfaces';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() public product: IProduct | null = null;
  @Output() onRemoveFromCart: EventEmitter<number> = new EventEmitter<number>();
  @Output() onShowDetails: EventEmitter<number> = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {}

  public details: boolean = false;

  public removeFromCart(id: number) {
    this.onRemoveFromCart.emit(id);
  }

  public showDetails(id: number) {
    this.onShowDetails.emit(id);
  }
}
