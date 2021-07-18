import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetLoadingAnimationService {
  constructor() {}

  private assetState: boolean = false;

  getAssetState() {
    return this.assetState;
  }

  setLoadTrue() {
    this.assetState = true;
  }

  setLoadFalse() {
    this.assetState = false;
  }
}
