import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-featured-posts',
  templateUrl: './featured-section.component.html',
  styleUrls: ['./featured-section.component.css'],
})
export class FeaturedBlogComponent implements OnInit {
  constructor() {}

  @Input() data: any[];

  ngOnInit(): void {}
}
