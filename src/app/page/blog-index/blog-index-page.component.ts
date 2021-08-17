import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Entry } from 'contentful';
import { AssetLoadingAnimationService } from 'src/app/services/asset-loading-animation.service';
import { ContentfulService } from 'src/app/services/contentful.service';
import { PageLoadingAnimationService } from 'src/app/services/page-loading-animation.service';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-index-page.component.html',
  styleUrls: ['./blog-index-page.component.css'],
})
export class BlogIndexPageComponent implements OnInit {
  title: string = 'Blog Home: Hope for Communities';
  response_data: any[];
  featured_posts = [];
  posts_of_the_week: any;
  page_state = false;

  asset_progression: number;
  assets_state: boolean;
  constructor(
    private blogService: ContentfulService,
    private pageLoader: PageLoadingAnimationService,
    private assetLoader: AssetLoadingAnimationService,
    @Inject(PLATFORM_ID) private platformId: any,
    private metaTags: Meta,
    private titleTag: Title
  ) {
    this.pageLoader.setLoadTrue();
    this.page_state = this.pageLoader.getPageState();
    this.asset_progression = 0;
    this.assets_state = false;
  }

  ngOnInit(): void {
    this.titleTag.setTitle(this.title);
    this.metaTags.updateTag({
      name: 'Description',
      content: 'Hope for Communities home page',
    });

    if (isPlatformBrowser(this.platformId)) {
      this.blogService.getBlogPosts().then((res) => {
        this.response_data = res;
        this.filterFeatured(this.response_data);
        this.filterPoW(this.response_data);

        this.pageLoader.setLoadFalse();
        this.page_state = this.pageLoader.getPageState();
      });

      this.loadAssets();
    }
  }

  loadAssets() {
    setTimeout(() => {
      let HTML_assets = document.getElementsByTagName('img');
      let assets = Array.from(HTML_assets);

      this.assetLoader.assetLoaderEngine(assets);
    }, 500);

    const progress_checker = setInterval(() => {
      this.asset_progression = this.assetLoader.getProgress();
      if (this.asset_progression == 100) {
        clearInterval(progress_checker);
        setTimeout(() => {
          this.assets_state = true;
        }, 500);
      }
    }, 500);
  }

  private filterFeatured(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].fields.weeksPost == true) {
        this.featured_posts.push(data[i]);
      }
    }
    console.log(this.featured_posts);
  }

  private filterPoW(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].fields.feature == true) {
        this.posts_of_the_week = data[i];
      }
    }
    console.log(this.posts_of_the_week);
  }

  loadingRequest() {
    return this.pageLoader.getPageState();
  }
}
