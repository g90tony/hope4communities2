import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { observable } from 'rxjs';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PageLoadingAnimationService } from './services/page-loading-animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private metaTags: Meta) {
    this.metaTags.addTags([
      {
        name: 'keywords',
        content:
          'African-based communities, community development, christian-based, east african, NGO, non-profit,  ',
      },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
