import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  templateUrl: './blog-view-article.component.html',
  styleUrls: ['./blog-view-article.component.css'],
})
export class BlogViewArticleComponent implements OnInit {
  current_post: Entry<any>;
  related_posts: any[];
  article_id: any;

  constructor(
    private bloGService: ContentfulService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.article_id = params['id'];
    });

    this.bloGService.getBlogPost(this.article_id).then((results) => {
      this.current_post = results;
      let related_tags: string = '';

      this.current_post.metadata.tags.forEach((tag) => {
        related_tags = related_tags + `${tag.sys.id}`;
      });

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
    });
  }
}
