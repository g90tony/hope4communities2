import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingSectionComponent } from './section/index/landing-section/landing-section.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './page/landing/landing-page.component';
import { KnowusSectionComponent } from './section/index/knowus-section/knowus-section.component';
import { FutureSectionComponent } from './section/index/future-section/future-section.component';
import { TeamSectionComponent } from './section/index/team-section/team-section.component';
import { environment } from 'src/environments/environment';
import { WorkPageComponent } from './page/work-page/work-page.component';
import { WorkLandingSectionComponent } from './section/work/work-landing-section/work-landing-section.component';
import { WorkPurposeSectionComponent } from './section/work/work-purpose-section/work-purpose-section.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { ContactLandingComponent } from './section/contact/contact-landing/contact-landing.component';
import { BlogIndexPageComponent } from './page/blog_index/blog-index-page.component';
import { BlogLandingSectionComponent } from './section/blog_index/landing-section/blog-landing-section.component';
import { WeeksBlogComponent } from './section/blog_index/weeks-blog/weeks-blog.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogNavbarComponent } from './components/blog-navbar/blog-navbar.component';
import { FeaturedBlogComponent } from './section/blog_index/featured-blog/featured-blog.component';

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
    ContactPageComponent,
    ContactLandingComponent,
    BlogIndexPageComponent,
    BlogLandingSectionComponent,
    WeeksBlogComponent,
    BlogItemComponent,
    BlogNavbarComponent,
    FeaturedBlogComponent,
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
