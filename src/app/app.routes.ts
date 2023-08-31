import { Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { SearchAlbumsComponent } from "./components/search/search-albums/search-albums.component";
import { SearchAllComponent } from "./components/search/search-all/search-all.component";
import { SearchArtistsComponent } from "./components/search/search-artists/search-artists.component";
import { SearchTracksComponent } from "./components/search/search-tracks/search-tracks.component";
import { AboutComponent } from "./components/about/about.component";
import { ArtistComponent } from "./components/artist/artist.component";

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'searchAll', component: SearchAllComponent},
    {path: 'searchTracks', component: SearchTracksComponent},
    {path: 'searchArtists', component: SearchArtistsComponent},
    {path: 'searchAlbums', component: SearchAlbumsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'artist/:id', component: ArtistComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
]