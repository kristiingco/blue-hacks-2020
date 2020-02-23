import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ArtisanComponent } from './artisan/artisan.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ImageSearchComponent } from './image-search/image-search.component';


const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'artisan/:id', component: ArtisanComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'image', component: ImageSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
