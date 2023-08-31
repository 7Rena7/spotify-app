import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styles: [
  ]
})
export class ErrorModalComponent {
  @Input() errorMessage: string;
}
