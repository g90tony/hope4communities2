import { Component } from '@angular/core';
import { observable } from 'rxjs';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PageLoadingAnimationService } from './services/page-loading-animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hope For Communities: Enabling hearts, minds and pockets';
}
