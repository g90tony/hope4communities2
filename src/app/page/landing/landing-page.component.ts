import { Component, Input, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { timeout } from 'rxjs/operators';
import { AssetLoadingAnimationService } from 'src/app/services/asset-loading-animation.service';
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
    private titleTag: Title
  ) {
    this.pageLoader.setLoadTrue();
    this.page_state = this.pageLoader.getPageState();

    this.assets_state = false;
    this.asset_progression = 0;
  }

  ngOnInit(): void {
    this.titleTag.setTitle(this.title);
    this.metaTags.updateTag({
      name: 'Description',
      content: 'Hope for Communities home page.',
    });

    this.pageLoader.setLoadFalse();
    this.page_state = this.pageLoader.getPageState();

    this.assetRegister();
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
