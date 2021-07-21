import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { AssetLoadingAnimationService } from 'src/app/services/asset-loading-animation.service';
import { PageLoadingAnimationService } from 'src/app/services/page-loading-animation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  asset_progression: number;
  assets_state: boolean;
  page_state: boolean;

  constructor(
    private pageLoader: PageLoadingAnimationService,
    private assetLoader: AssetLoadingAnimationService
  ) {
    this.pageLoader.setLoadTrue();
    this.page_state = this.pageLoader.getPageState();

    this.assets_state = false;
    this.asset_progression = 0;
  }

  ngOnInit(): void {
    this.pageLoader.setLoadFalse();
    this.page_state = this.pageLoader.getPageState();

    this.assetRegister();
  }

  assetHasLoaded() {}

  assetRegister = () => {
    setTimeout(() => {
      let HTML_assets = document.getElementsByTagName('img');
      let assets = Array.from(HTML_assets);

      assets.forEach((asset) => {
        let new_asset = {
          name: asset.id,
          hasLoaded: false,
        };

        this.assetLoader.registerAsset({
          name: asset.id,
          hasLoaded: false,
        });

        asset.addEventListener('load', (event) => {
          this.assetLoader.assetHasLoaded(new_asset.name);
          this.asset_progression = this.assetLoader.getProgress();

          if (this.asset_progression == 100) {
            setTimeout(() => {
              this.assets_state = true;
            }, 1200);
          }
        });
      });
    }, 10);
  };
}
