import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-breadcrumb',
  templateUrl: './blog-breadcrumb.component.html',
  styleUrls: ['./blog-breadcrumb.component.css'],
})
export class BlogBreadcrumbComponent implements OnInit {
  @Input() post_title;
  @Input() post_id;

  constructor() {}

  ngOnInit(): void {}
}
