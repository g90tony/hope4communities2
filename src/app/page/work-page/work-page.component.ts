import { Component, OnInit } from '@angular/core';
import { PageLoadingAnimationService } from 'src/app/services/page-loading-animation.service';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.css'],
})
export class WorkPageComponent implements OnInit {
  page_state: boolean;

  constructor(private pageLoader: PageLoadingAnimationService) {
    this.pageLoader.setLoadTrue();
    this.page_state = this.pageLoader.getPageState();
  }

  ngOnInit(): void {
    this.pageLoader.setLoadFalse();
    this.page_state = this.pageLoader.getPageState();
  }
}
