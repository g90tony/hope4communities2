import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-results-header',
  templateUrl: './blog-results-header.component.html',
  styleUrls: ['./blog-results-header.component.css'],
})
export class BlogResultsHeaderComponent implements OnInit {
  constructor() {}

  @Input() search_query;
  @Input() results_count;

  ngOnInit(): void {}
}
