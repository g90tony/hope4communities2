import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogSearchResultsComponent } from './page/blog-search-results/blog-search-results.component';
import { BlogIndexPageComponent } from './page/blog-index/blog-index-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { LandingPageComponent } from './page/landing/landing-page.component';
import { WorkPageComponent } from './page/work-page/work-page.component';
import { BlogViewArticleComponent } from './page/blog-view-article/blog-view-article.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      seo: {
        title: `Home: Hope for Communities`,
        description: `This is the homepage for Hope for Communities, a christian-based, non-profit, community development organization based in Kenya.`,
        shareImg: '/assets/landingImage.png',
      },
    },
  },
  {
    path: 'work',
    component: WorkPageComponent,
    data: {
      seo: {
        title: `Our Strategies of Impact: Hope for Communities`,
        description: `Hope for Communities aim to transform African communities through three (3) core strategies. This page discusses them in detail including how they work.`,
        shareImg: '/assets/workLanigngImage.png',
      },
    },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      seo: {
        title: `Contacts: Hope for Communities`,
        description: `This is page provides details on how to contact Hope for Communities including a feedback form for customized messages.`,
        shareImg: '/assets/landingImage.png',
      },
    },
  },
  {
    path: 'blog',
    component: BlogIndexPageComponent,
    data: {
      seo: {
        title: `Blog: Hope for Communities`,
        description: `Stay upto date with Hope for Communities through our blogs. Here we discuss past and future events and projects.`,
        shareImg: '/assets/logo.png',
      },
    },
  },
  {
    path: 'blog/search/:search_query',
    component: BlogSearchResultsComponent,
    data: {
      seo: {
        title: `Blog Search Results: Hope for Communities`,
        description: `This is the blog search results.`,
        shareImg: '/assets/logo.png',
      },
    },
  },
  {
    path: 'blog/view/:id',
    component: BlogViewArticleComponent,
    data: {
      seo: {
        title: `View Blog Article: Hope for Communities`,
        description: `This is the blog article view page.`,
        shareImg: '/assets/logo.png',
      },
    },
  },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
