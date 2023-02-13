import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() public error: string | null = null;
  @Output() onHideError: EventEmitter<string> = new EventEmitter<string>();

  public hideError(): void {
    this.onHideError.emit('');
  }
}
