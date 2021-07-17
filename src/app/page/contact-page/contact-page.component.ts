import { Component, OnInit } from '@angular/core';
import { PageLoadingAnimationService } from 'src/app/services/page-loading-animation.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent implements OnInit {
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
