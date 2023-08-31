import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  // TODO: Get Access Token
  // token: string;

  // getAccessToken() {
  //   const url = 'https://accounts.spotify.com/api/token';

  //   const headers = new HttpHeaders({
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   })

  //   const body = {
  //     "grant_type": "client_credentials",
  //     "client_id": environment.client_id,
  //     "client_secret": environment.client_secret
  //   }

  //   console.log(url, headers, body);

  //   return this.http.post(url, body, {headers}).pipe(map((data: any) => data["access_token"]))
  // }

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC2mhTQrvs3LCiT35DIBrXOpUEYwYyNbqgp_JkVKqcOvMApBWKSNC1Ae9q0J1ENCwUpay4iSt3GF3i4vc62ag0v-W-qclkqprOQJdlr6AHb4GjetgI',
    });

    return this.http.get(url, { headers });
  }

  // Combine Artists, Albums and Tracks to show in Search All Section
  combineArrays(arr1: any[], arr2: any[], arr3: any[]) {
    const combinedArray = [...arr1, ...arr2, ...arr3];

    // perform the Fisher-Yates shuffle on the array
    for (let i = combinedArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combinedArray[i], combinedArray[j]] = [
        combinedArray[j],
        combinedArray[i],
      ];
    }

    return combinedArray;
  }

  getLatestReleasesAR() {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  searchAll(term: string) {
    return this.getQuery(`search?q=${term}&type=album,artist,track`).pipe(
      map((data: any) =>
        this.combineArrays(
          data.artists.items,
          data.albums.items,
          data.tracks.items
        )
      )
    );
  }

  searchAlbums(term: string) {
    return this.getQuery(`search?q=${term}&type=album`).pipe(
      map((data: any) => data['albums'].items)
    );
  }

  searchArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist`).pipe(
      map((data: any) => data['artists'].items)
    );
  }

  searchTracks(term: string) {
    return this.getQuery(`search?q=${term}&type=track`).pipe(
      map((data: any) => data['tracks'].items)
    );
  }

  artistInfo(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  artistAlbums(id: string) {
    return this.getQuery(`artists/${id}/albums?limit=3`).pipe(
      map((data: any) => data.items)
    );
  }

  artistTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=UY`).pipe(
      map((data: any) => data.tracks)
    );
  }

  artistRelatedArtists(id: string) {
    return this.getQuery(`artists/${id}/related-artists?limit=3`).pipe(
      map((data: any) => data.artists)
    );
  }
}
