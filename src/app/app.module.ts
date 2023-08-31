import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { routes } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchAllComponent } from './components/search/search-all/search-all.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SearchTracksComponent } from './components/search/search-tracks/search-tracks.component';
import { SearchNavbarComponent } from './components/search/search-navbar/search-navbar.component';
import { SearchAlbumsComponent } from './components/search/search-albums/search-albums.component';
import { SearchArtistsComponent } from './components/search/search-artists/search-artists.component';
import { AboutComponent } from './components/about/about.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { MsToTimePipe } from './pipes/ms-to-time.pipe';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TrackComponent } from './components/shared/track/track.component';
import { ErrorModalComponent } from './components/shared/error-modal/error-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchAllComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    SearchTracksComponent,
    SearchNavbarComponent,
    SearchAlbumsComponent,
    SearchArtistsComponent,
    AboutComponent,
    TitleCasePipe,
    MsToTimePipe,
    FooterComponent,
    TrackComponent,
    ErrorModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
