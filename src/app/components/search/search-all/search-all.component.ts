import { Component } from '@angular/core';
import { catchError, delay, Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-all',
  templateUrl: './search-all.component.html',
})
export class SearchAllComponent {

  // TODO: Pagination

  error: boolean = false;
  errorMessage: string;

  items$: Observable<any[]>;

  constructor(private spotify: SpotifyService) {}

  search(term: string) {
    this.items$ = this.spotify.searchAll(term).pipe(catchError(error => {
      console.error(error);
      this.error = true;
      this.errorMessage = `${error.status} - ${error.error?.error?.message}`;
      throw new Error(error);
    }))
  }
}
