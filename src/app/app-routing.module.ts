import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
