import { Component, OnInit } from '@angular/core';
import { AssetLoadingAnimationService } from 'src/app/services/asset-loading-animation.service';
import { PageLoadingAnimationService } from 'src/app/services/page-loading-animation.service';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.css'],
})
export class WorkPageComponent implements OnInit {
  page_state: boolean;
  asset_progression: number;
  assets_state: boolean;
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
    this.loadAssets();
  }

  loadAssets = () => {
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
