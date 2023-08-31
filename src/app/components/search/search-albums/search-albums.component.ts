import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-albums',
  templateUrl: './search-albums.component.html',
  styles: [
  ]
})
export class SearchAlbumsComponent {
  
  error: boolean = false;
  errorMessage: string;
  
  albums$: Observable<any[]>;

  constructor(private spotify: SpotifyService) {}

  search(term: string) {
    this.albums$ = this.spotify.searchAlbums(term).pipe(catchError(error => {
      console.error(error);
      this.error = true;
      this.errorMessage = `${error.status} - ${error.error?.error?.message}`;
      throw new Error(error);
    }))
  }
}
