import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { AssetLoadingAnimationService } from 'src/app/services/asset-loading-animation.service';
import { ContentfulService } from 'src/app/services/contentful.service';
import { PageLoadingAnimationService } from 'src/app/services/page-loading-animation.service';

@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-index-page.component.html',
  styleUrls: ['./blog-index-page.component.css'],
})
export class BlogIndexPageComponent implements OnInit {
  response_data: any[];
  featured_posts = [];
  posts_of_the_week: any;
  page_state = false;

  asset_progression: number;
  assets_state: boolean;
  constructor(
    private blogService: ContentfulService,
    private pageLoader: PageLoadingAnimationService,
    private assetLoader: AssetLoadingAnimationService
  ) {
    this.pageLoader.setLoadTrue();
    this.page_state = this.pageLoader.getPageState();
    this.asset_progression = 0;
    this.assets_state = false;
  }

  ngOnInit(): void {
    this.blogService.getBlogPosts().then((res) => {
      this.response_data = res;
      this.filterFeatured(this.response_data);
      this.filterPoW(this.response_data);

      this.pageLoader.setLoadFalse();
      this.page_state = this.pageLoader.getPageState();
    });

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
