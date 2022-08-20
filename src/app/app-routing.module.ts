import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhoneLoginComponent } from './components/phone-login/phone-login.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { StatsComponent } from './components/stats/stats.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: SearchPlayerComponent },
  { path: 'confirm', component: HomeComponent },
  { path: 'construction', component: SearchPlayerComponent }, 
  { path: 'team', component: TeamComponent }, 
  { path: 'stats', component: StatsComponent }, 
  { path: 'login', component: PhoneLoginComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
