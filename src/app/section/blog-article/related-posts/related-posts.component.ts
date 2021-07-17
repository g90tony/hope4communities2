import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-related-posts',
  templateUrl: './related-posts.component.html',
  styleUrls: ['./related-posts.component.css'],
})
export class RelatedPostsComponent implements OnInit {
  @Input() related;

  constructor() {}

  ngOnInit(): void {}
}
