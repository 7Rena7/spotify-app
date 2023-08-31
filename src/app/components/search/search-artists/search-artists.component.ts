import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-artists',
  templateUrl: './search-artists.component.html',
  styles: [
  ]
})
export class SearchArtistsComponent {
  
  error: boolean = false;
  errorMessage: string;
  
  artists$: Observable<any[]>;

  constructor(private spotify: SpotifyService) {}

  search(term: string) {
   this.artists$ = this.spotify.searchArtists(term).pipe(catchError(error => {
      console.error(error);
      this.error = true;
      this.errorMessage = `${error.status} - ${error.error?.error?.message}`;
      throw new Error(error);
   }))
  }
}
