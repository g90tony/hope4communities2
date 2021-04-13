import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './page/landing/landing-page.component';
import { KnowusSectionComponent } from './components/knowus-section/knowus-section.component';
import { FutureSectionComponent } from './components/future-section/future-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { environment } from 'src/environments/environment';

const firebaseConfig = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId,
  measurementId: environment.measurementId,
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingSectionComponent,
    LandingPageComponent,
    KnowusSectionComponent,
    FutureSectionComponent,
    TeamSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
