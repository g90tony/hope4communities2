import { Component, OnInit } from '@angular/core';
import { AssetLoadingAnimationService } from 'src/app/services/asset-loading-animation.service';
import { PageLoadingAnimationService } from 'src/app/services/page-loading-animation.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
  page_state: boolean;
  asset_progression: number;
  assets_state: boolean;
  constructor(
    private pageLoader: PageLoadingAnimationService,
    private assetLoader: AssetLoadingAnimationService
  ) {
    this.pageLoader.setLoadTrue();
    this.page_state = this.pageLoader.getPageState();
    this.asset_progression = 0;
    this.assets_state = false;
  }

  ngOnInit(): void {
    this.pageLoader.setLoadFalse();
    this.page_state = this.pageLoader.getPageState();
    this.loadAssets();
  }
  loadAssets() {
    setTimeout(() => {
      let HTML_assets = document.getElementsByTagName('img');
      let assets = Array.from(HTML_assets);
      let name = 1;

      assets.forEach((asset) => {
        let new_asset = {
          name: name.toString(),
          hasLoaded: asset.complete ? true : false,
        };
        this.assetLoader.registerAsset(new_asset);

        name++;

        if (asset.complete) {
          this.assetLoader.assetHasLoaded(new_asset.name);

          this.asset_progression = this.assetLoader.getProgress();
        } else {
          asset.addEventListener('load', (event) => {
            this.assetLoader.assetHasLoaded(new_asset.name);
            console.log(new_asset);
            this.asset_progression = this.assetLoader.getProgress();

            if (this.asset_progression == 100) {
              setTimeout(() => {
                this.assets_state = true;
              }, 1200);
            }
          });
        }

        if (this.asset_progression == 100) {
          setTimeout(() => {
            this.assets_state = true;
          }, 1200);
        }
      }),
        10;
    });
  }
}
