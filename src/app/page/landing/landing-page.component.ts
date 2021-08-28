import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Inject } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { AssetLoadingAnimationService } from 'src/app/services/asset-loading-animation.service';
import { DocumentRef } from 'src/app/services/document-reference.service';
import { PageLoadingAnimationService } from 'src/app/services/page-loading-animation.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  title: string = 'Home: Hope for Communities';

  asset_progression: number;
  assets_state: boolean;
  page_state: boolean;

  constructor(
    private pageLoader: PageLoadingAnimationService,
    private assetLoader: AssetLoadingAnimationService,
    private metaTags: Meta,
    private titleTag: Title,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.pageLoader.setLoadTrue();
    this.page_state = this.pageLoader.getPageState();

    this.assets_state = false;
    this.asset_progression = 0;
  }

  ngOnInit(): void {
    this.titleTag.setTitle(this.title);

    this.metaTags.addTags([
      {
        name: 'Description',
        content: 'Hope for Communities home page.',
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/' },
      { name: 'og:title', content: this.title },
      {
        name: 'og:description',
        content:
          'Empower individuals, communities and local Church to appreciate their God-given potential and confront poverty and injustice.',
      },
    ]);

    if (isPlatformBrowser(this.platformId)) {
      this.pageLoader.setLoadFalse();
      this.page_state = this.pageLoader.getPageState();

      this.assetRegister();
    }
  }

  assetHasLoaded() {}

  assetRegister = () => {
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
  };
}
