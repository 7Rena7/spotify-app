import { Component } from '@angular/core';
import { posthog } from 'posthog-js';

type PosthogPayload = {
  title: string;
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  title = 'SpotiApp';

  constructor() {
    if (posthog.isFeatureEnabled('new-title')) {
      // do something
      const newTitle = posthog.getFeatureFlagPayload('new-title');
      // Check if newTitle is not null and assigned the property title to this.title
      console.log(newTitle);
      if (newTitle) {
        this.title = (newTitle as PosthogPayload).title;
      }
    }
  }
}
