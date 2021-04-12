import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './page/landing/landing-page.component';
import { KnowusSectionComponent } from './components/knowus-section/knowus-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingSectionComponent,
    LandingPageComponent,
    KnowusSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
