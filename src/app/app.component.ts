import { Component, OnInit } from '@angular/core';
import posthog, { CaptureResult } from 'posthog-js';

posthog.init('phc_K7O8zAPJtWvbubxUgGUpw8oL0tOmXvapYdIqRuCHL7X', {
  api_host: 'https://app.posthog.com',
});

// Ensure flags are loaded before usage.
// You'll only need to call this on the code for when the first time a user visits.
posthog.onFeatureFlags(function () {
  // feature flags should be available at this point
  if (posthog.isFeatureEnabled('new-title')) {
    // do something
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // TODO: Section to show all the my recently listened songs/favourite
  posthogResult: CaptureResult | void;

  ngOnInit() {
    this.posthogResult = posthog.capture('my event', { property: 'value' });
    console.log(this.posthogResult);
  }
}
