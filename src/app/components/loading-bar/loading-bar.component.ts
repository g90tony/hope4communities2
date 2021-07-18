import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css'],
})
export class LoadingBarComponent implements OnInit {
  page_assets = [{ name: '', hasLoaded: false }];
  asset_count = this.page_assets.length + 1;
  progression = 0;

  @Input() public hasLoaded: (param: any) => number;

  public assetHasLoaded(asset_name: string) {
    this.page_assets.forEach((asset) => {
      if (asset.name == asset_name) {
        asset.hasLoaded = true;
      }
    });

    this.page_assets.forEach((asset) => {
      if (asset.hasLoaded) {
        this.progression++;
      }
    });

    if (this.progression == this.asset_count) {
      this.hasLoaded(true);
    }
  }

  public registerAsset(new_asset: { name: string; hasLoaded: false }) {
    if (this.page_assets.length < 1) {
      this.page_assets[0].name = new_asset.name;
      this.page_assets[0].hasLoaded = new_asset.hasLoaded;
    } else {
      this.page_assets.push(new_asset);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
