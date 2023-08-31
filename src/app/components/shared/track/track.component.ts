import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
})
export class TrackComponent {
  @Input() track: any;
}
