import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';
import { PageLoadingAnimationService } from 'src/app/services/page-loading-animation.service';
import { AssetLoadingAnimationService } from 'src/app/services/asset-loading-animation.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  templateUrl: './blog-view-article.component.html',
  styleUrls: ['./blog-view-article.component.css'],
})
export class BlogViewArticleComponent implements OnInit {
  current_post: Entry<any>;
  related_posts: any[];
  article_id: any;
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
      this.article_id = params['id'];
    });

    this.bloGService.getBlogPost(this.article_id).then((results) => {
      this.current_post = results;
      let meta_tags = this.current_post.metadata.tags;
      let related_tags: string = `${meta_tags[0].sys.id}`;

      for (let i = 1; i < meta_tags.length; i++) {
        related_tags = related_tags + `, ${meta_tags[i].sys.id}`;
      }

      this.titleTag.setTitle(`${results.fields.title}: Hope for Communities`);
      this.metaTags.updateTag({
        name: 'description',
        content: results.fields.description,
      });
      history.pushState({}, `${results.fields.title}: Hope for Communities`);

      this.bloGService.getRelatedPosts(related_tags).then((res) => {
        this.related_posts = res;
        let temp = [];

        res.forEach((post) => {
          if (post.sys.id != this.current_post.sys.id) {
            temp.push(post);
          }
        });

        this.related_posts = temp;
      });
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
