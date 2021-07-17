import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-weeks-blog',
  templateUrl: './weeks-blog.component.html',
  styleUrls: ['./weeks-blog.component.css'],
})
export class WeeksBlogComponent implements OnInit {
  constructor() {}

  @Input() data;

  ngOnInit(): void {}
}
