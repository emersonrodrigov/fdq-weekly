import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { ListPlayerComponent } from './components/list-player/list-player.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { EditPlayerComponent } from './modal/edit-player/edit-player.component';
import { getStorage, provideStorage } 
from '@angular/fire/storage';

import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService
} from '@angular/fire/analytics';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { TeamComponent } from './components/team/team.component';  
import {MatGridListModule} from '@angular/material/grid-list';
import { StatsComponent } from './components/stats/stats.component';
import { StatsAdminComponent } from './components/stats-admin/stats-admin.component';
import { EventEmitterService } from './services/event-emitter.service'; 
import { PhoneLoginComponent } from './components/phone-login/phone-login.component'; 
import { WindowService } from './window.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    ListPlayerComponent,
    SearchPlayerComponent,
    EditPlayerComponent,
    TeamComponent,
    StatsComponent,
    StatsAdminComponent,
    PhoneLoginComponent 
  ],
  imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgbModule,
        FormsModule ,  
        ReactiveFormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
        provideAnalytics(() => getAnalytics()),
        
        MatSliderModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule, 
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatTableModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule ,
        MatGridListModule,
        

        
    
  
  ],
  providers: [
    EventEmitterService,
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
