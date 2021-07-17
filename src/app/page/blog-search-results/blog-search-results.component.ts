import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(
    private bloGService: ContentfulService,
    private route: ActivatedRoute,
    private pageLoader: PageLoadingAnimationService
  ) {
    this.pageLoader.setLoadTrue();
    this.page_state = this.pageLoader.getPageState();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.search_query = params['search_query'];
    });

    this.bloGService.getSearchQuery(this.search_query).then((res) => {
      this.search_results = res;
      this.results_count = res.length;
      this.pageLoader.setLoadFalse();
      this.page_state = this.pageLoader.getPageState();
    });
  }
}
