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
    this.asset_count =
      this.page_assets.length == 0 ? 0 : this.page_assets.length;
    this.progression = 0;
    this.progression_percent = 0;
    this.isLoading = false;
  }

  getStatus() {
    return this.isLoading;
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

    this.progression_percent = (current_progression / this.asset_count) * 100;

    if (this.progression < current_progression) {
      this.progression = current_progression;
    }
  }

  registerAsset(new_asset: { name: string; hasLoaded: false }) {
    if (this.page_assets.length == 0) {
      this.page_assets[0].name = new_asset.name;
      this.page_assets[0].hasLoaded = new_asset.hasLoaded;
    } else {
      this.page_assets.push(new_asset);
    }

    this.asset_count++;
  }
}
