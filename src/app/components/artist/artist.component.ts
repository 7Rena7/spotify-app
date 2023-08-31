import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
})
export class ArtistComponent {
  
  artist: any;
  albums: any[];
  topTracks: any[];
  relatedArtists: any[];
  
  constructor(private spotify: SpotifyService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.artistInfo(params['id']);
      this.artistAlbums(params['id']);
      this.artistTopTracks(params['id']);
      this.artistRelatedArtists(params['id']);
    });
  }

  artistInfo(id: string) {
    this.spotify.artistInfo(id).subscribe((data: any) => {
      this.artist = data;
    });
  }

  artistAlbums(id: string) {
    this.spotify.artistAlbums(id).subscribe((data: any) => {
      this.albums = data;
    });
  }

  artistTopTracks(id: string) {
    this.spotify.artistTopTracks(id).subscribe((data: any) => {
      this.topTracks = data.slice(0, 6)
    });
  }

  artistRelatedArtists(id: string) {
    this.spotify.artistRelatedArtists(id).subscribe((data: any) => {
      this.relatedArtists = data.slice(0, 3)
    });
  }
}
