import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MapComponent } from './map/map.component';
import { LocationMarkerComponent } from './location-marker/location-marker.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { ArtisanHeaderComponent } from './artisan-header/artisan-header.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { ArtisanDescriptionComponent } from './artisan-description/artisan-description.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AddToCartButtonComponent } from './add-to-cart-button/add-to-cart-button.component';
import { ItemAddedComponent } from './item-added/item-added.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageSearchComponent } from './image-search/image-search.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MapComponent,
    LocationMarkerComponent,
    ArtisanComponent,
    ArtisanHeaderComponent,
    BackButtonComponent,
    ArtisanDescriptionComponent,
    ProductSectionComponent,
    ProductCardComponent,
    ProductPageComponent,
    AddToCartButtonComponent,
    ItemAddedComponent,
    ImageSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
