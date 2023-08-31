import { Component } from '@angular/core';
import { catchError, delay, Observable } from 'rxjs';

import { SpotifyService } from 'src/app/services/spotify.service';

// For use in countries API - Example
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
  // For use in countries API - Example
  // countries: any[] = [];
  // constructor(private http: HttpClient) { 
  //   console.log('Constructor Created');
  //   this.http.get('https://restcountries.com/v3.1/lang/french')
  //     .subscribe((countries: any) => {
  //       this.countries = countries;
  //       console.log(countries)
  //     }) 
  //  }

  error: boolean = false;
  errorMessage: string = '';

  latestReleases$: Observable<any[]>;

  constructor(private spotify: SpotifyService) {
    // TODO: Get Access Token
    // this.spotify.getAccessToken().subscribe((token: string) => {
    //   console.log(token);
    // })

    this.latestReleases$ = this.spotify.getLatestReleasesAR()
      .pipe(catchError(error => {
        console.error(error);
        this.error = true;
        this.errorMessage = `${error.status} - ${error?.error?.error?.message}`;
        throw new Error(error)
    }))
  }


}
