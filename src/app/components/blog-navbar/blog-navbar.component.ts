import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'blog-navbar',
  templateUrl: './blog-navbar.component.html',
  styleUrls: ['./blog-navbar.component.css'],
})
export class BlogNavbarComponent implements OnInit {
  constructor(private route: Router, private currentRoute: ActivatedRoute) {}

  searchForm = new FormGroup({
    search_query: new FormControl(''),
  });

  onSubmit() {
    let query: string = this.searchForm.value.search_query;

    this.currentRoute.params.subscribe((params: Params) => {
      let params_exists = params['search_query'];

      if (params_exists) {
        window.location.reload();
      }
    });

    this.route.navigate([`/blog/search/${query}`]);
  }

  ngOnInit(): void {}
}
