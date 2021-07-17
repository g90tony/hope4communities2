import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-index-page.component.html',
  styleUrls: ['./blog-index-page.component.css'],
})
export class BlogIndexPageComponent implements OnInit {
  response_data: any[];
  featured_posts = [];
  posts_of_the_week: any;

  constructor(private blogService: ContentfulService) {}

  ngOnInit(): void {
    this.blogService.getBlogPosts().then((res) => {
      this.response_data = res;
      this.filterFeatured(this.response_data);
      this.filterPoW(this.response_data);
      console.log(this.response_data);
    });
  }

  private filterFeatured(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].fields.weeksPost == true) {
        this.featured_posts.push(data[i]);
      }
    }
    console.log(this.featured_posts);
  }

  private filterPoW(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].fields.feature == true) {
        this.posts_of_the_week = data[i];
      }
    }
    console.log(this.posts_of_the_week);
  }
}
