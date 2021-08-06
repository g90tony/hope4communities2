import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { AssetLoadingAnimationService } from 'src/app/services/asset-loading-animation.service';
import { ContentfulService } from 'src/app/services/contentful.service';
import { PageLoadingAnimationService } from 'src/app/services/page-loading-animation.service';

@Component({
  templateUrl: './blog-search-results.component.html',
  styleUrls: ['./blog-search-results.component.css'],
})
export class BlogSearchResultsComponent implements OnInit {
  search_query: string;
  search_results: any[];
  results_count: number;
  page_state: boolean;

  asset_progression: number;
  assets_state: boolean;

  constructor(
    private bloGService: ContentfulService,
    private route: ActivatedRoute,
    private pageLoader: PageLoadingAnimationService,
    private assetLoader: AssetLoadingAnimationService,
    private metaTags: Meta,
    private titleTag: Title
  ) {
    this.pageLoader.setLoadTrue();
    this.page_state = this.pageLoader.getPageState();
    this.asset_progression = 0;
    this.assets_state = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.search_query = params['search_query'];
      this.titleTag.setTitle(`Search Results for: ${this.search_query}`);
      this.metaTags.updateTag({
        name: 'description',
        content: `This is the search results for ${this.search_results}`,
      });
    });

    this.bloGService.getSearchQuery(this.search_query).then((res) => {
      this.search_results = res;
      this.results_count = res.length;
      this.pageLoader.setLoadFalse();
      this.page_state = this.pageLoader.getPageState();
    });
    this.loadAssets();
  }
  loadAssets() {
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
  }
}
