import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetLoadingAnimationService {
  page_assets = [{ name: '', hasLoaded: false }];
  asset_count: number;
  progression: number;
  progression_percent: number;
  isLoading: boolean;

  constructor() {
    this.asset_count = 0;
    this.progression = 0;
    this.progression_percent = 0;
  }

  getProgress() {
    return this.progression_percent;
  }

  assetHasLoaded(asset_name: string) {
    this.page_assets.forEach((asset) => {
      if (asset.name == asset_name) {
        asset.hasLoaded = true;
      }
    });

    let current_progression = 0;

    this.page_assets.forEach((asset) => {
      if (asset.hasLoaded) {
        current_progression++;
      }
    });

    this.progression = current_progression;

    this.progression_percent = (this.progression / this.asset_count) * 100;
  }

  registerAsset(new_asset = { name: '', hasLoaded: false }) {
    if (this.page_assets.length == 0) {
      this.page_assets[0].name = new_asset.name;
      this.page_assets[0].hasLoaded = new_asset.hasLoaded;
    } else {
      this.page_assets.push(new_asset);
    }

    this.asset_count++;
  }

  assetLoaderEngine(assets) {
    let name = 1;
    let progress_percentage = 0;

    assets.forEach((asset) => {
      let new_asset = {
        name: name.toString(),
        hasLoaded: false,
      };

      this.registerAsset(new_asset);

      name++;

      if (asset.complete && asset.naturalHeight >= 0) {
        this.assetHasLoaded(new_asset.name);

        progress_percentage = this.getProgress();
      } else {
        asset.addEventListener('load', (event) => {
          this.assetHasLoaded(new_asset.name);
          progress_percentage = this.getProgress();
        });
      }
    });

    if (progress_percentage == 100) {
      this.isLoading = false;
    }
  }
}
