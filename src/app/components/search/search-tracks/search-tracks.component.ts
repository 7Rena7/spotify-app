import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-tracks',
  templateUrl: './search-tracks.component.html',
  styles: [
  ]
})
export class SearchTracksComponent {
  
  error: boolean = false;
  errorMessage: string;

  tracks$: Observable<any[]>;

  constructor(private spotify: SpotifyService) {}

  search(term: string) {
    this.tracks$ = this.spotify.searchTracks(term).pipe(catchError(error => {
      console.error(error);
      this.error = true;
      this.errorMessage = `${error.status} - ${error.error?.error?.message}`;
      throw new Error(error);
    }))
  }
}
