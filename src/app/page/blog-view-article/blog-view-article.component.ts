import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';
import { PageLoadingAnimationService } from 'src/app/services/page-loading-animation.service';

@Component({
  templateUrl: './blog-view-article.component.html',
  styleUrls: ['./blog-view-article.component.css'],
})
export class BlogViewArticleComponent implements OnInit {
  current_post: Entry<any>;
  related_posts: any[];
  article_id: any;
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
      this.article_id = params['id'];
    });

    this.bloGService.getBlogPost(this.article_id).then((results) => {
      this.current_post = results;
      let meta_tags = this.current_post.metadata.tags;
      let related_tags: string = `${meta_tags[0].sys.id}`;

      console.log(meta_tags);

      for (let i = 1; i < meta_tags.length; i++) {
        related_tags = related_tags + `, ${meta_tags[i].sys.id}`;
      }

      console.log(related_tags);

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
  }
}
