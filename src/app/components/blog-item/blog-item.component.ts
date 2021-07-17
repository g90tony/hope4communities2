import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css'],
})
export class BlogItemComponent implements OnInit {
  constructor() {}

  @Input() item;

  ngOnInit(): void {}
}
