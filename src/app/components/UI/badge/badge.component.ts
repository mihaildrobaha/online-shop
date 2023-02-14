import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/interfaces';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() cartItems: IProduct[] | null = null;
}
