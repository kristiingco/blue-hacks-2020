import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MapComponent } from './map/map.component';
import { LocationMarkerComponent } from './location-marker/location-marker.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { ArtisanHeaderComponent } from './artisan-header/artisan-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MapComponent,
    LocationMarkerComponent,
    ArtisanComponent,
    ArtisanHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
