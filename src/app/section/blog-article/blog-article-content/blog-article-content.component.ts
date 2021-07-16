import { Component, Input, OnInit } from '@angular/core';

import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'blog-article-content',
  templateUrl: './blog-article-content.component.html',
  styleUrls: ['./blog-article-content.component.css'],
})
export class BlogArticleContentComponent implements OnInit {
  @Input() content = '';

  constructor() {}

  ngOnInit(): void {}

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
