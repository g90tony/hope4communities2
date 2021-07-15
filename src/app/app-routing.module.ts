import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSearchResultsComponent } from './page/blog-search-results/blog-search-results.component';
import { BlogIndexPageComponent } from './page/blog-index/blog-index-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { LandingPageComponent } from './page/landing/landing-page.component';
import { WorkPageComponent } from './page/work-page/work-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'work', component: WorkPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'blog', component: BlogIndexPageComponent },
  { path: 'blog/search/:search_query', component: BlogSearchResultsComponent },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
