import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'all-blog-posts',
  templateUrl: './all-posts-section.component.html',
  styleUrls: ['./all-posts-section.component.css'],
})
export class AllPostsBlogComponent implements OnInit {
  constructor() {}

  @Input() data;

  ngOnInit(): void {}
}
