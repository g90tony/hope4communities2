import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article-landing-section',
  templateUrl: './article-landing-section.component.html',
  styleUrls: ['./article-landing-section.component.css'],
})
export class ArticleLandingSectionComponent implements OnInit {
  constructor() {}

  @Input() image: any;
  @Input() title: any;
  @Input() date: any;
  @Input() author: any;

  ngOnInit(): void {}
}
