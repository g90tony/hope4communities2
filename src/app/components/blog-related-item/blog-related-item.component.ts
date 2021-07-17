import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-related-item',
  templateUrl: './blog-related-item.component.html',
  styleUrls: ['./blog-related-item.component.css'],
})
export class BlogRelatedItemComponent implements OnInit {
  @Input() item;

  constructor() {}

  ngOnInit(): void {
    console.log(this.item);
  }
}
