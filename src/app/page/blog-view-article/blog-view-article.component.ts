import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  templateUrl: './blog-view-article.component.html',
  styleUrls: ['./blog-view-article.component.css'],
})
export class BlogViewArticleComponent implements OnInit {
  current_post: Entry<any>;

  constructor(private bloGService: ContentfulService) {}

  ngOnInit(): void {
    this.bloGService.getBlogPost('6vHHR4WlDzzFr9DqsFQzVc').then((results) => {
      this.current_post = results;
      console.log(this.current_post);
    });
  }
}
