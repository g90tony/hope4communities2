import { Component, OnInit } from '@angular/core';

import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'blog-article-content',
  templateUrl: './blog-article-content.component.html',
  styleUrls: ['./blog-article-content.component.css'],
})
export class BlogArticleContentComponent implements OnInit {
  current_post: Entry<any>;

  constructor(private bloGService: ContentfulService) {}

  ngOnInit(): void {
    this.bloGService.getBlogPost('6vHHR4WlDzzFr9DqsFQzVc').then((results) => {
      this.current_post = results;
      console.log(this.current_post);
    });
  }

  returnHtmlFromRichText(richText) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }
}
