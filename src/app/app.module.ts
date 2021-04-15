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
import { WorkPageComponent } from './page/work-page/work-page.component';
import { WorkLandingSectionComponent } from './components/work-landing-section/work-landing-section.component';
import { WorkPurposeSectionComponent } from './components/work-purpose-section/work-purpose-section.component';
import { ContactComponent } from './page/contact/contact.component';
import { ContactLandingComponent } from './components/contact-landing/contact-landing.component';

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
    WorkPageComponent,
    WorkLandingSectionComponent,
    WorkPurposeSectionComponent,
    ContactComponent,
    ContactLandingComponent,
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
