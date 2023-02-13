import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-start-category',
  templateUrl: './start-category.component.html',
  styleUrls: ['./start-category.component.scss'],
})
export class StartCategoryComponent {
  @Input() category: string | null = null;
}
