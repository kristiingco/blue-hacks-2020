import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ArtisanComponent } from './artisan/artisan.component';


const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'artisan/:id', component: ArtisanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
