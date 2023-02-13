import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/interfaces';

@Component({
  selector: 'app-dialog-cart-item',
  templateUrl: './dialog-cart-item.component.html',
  styleUrls: ['./dialog-cart-item.component.scss'],
})
export class DialogCartItemComponent {
  @Input() public product: IProduct | null = null;
  @Input() public id: number | null = null;
}
