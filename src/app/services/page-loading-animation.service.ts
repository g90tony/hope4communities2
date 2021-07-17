import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageLoadingAnimationService {
  private pageState: boolean = false;

  getPageState() {
    return this.pageState;
  }

  setLoadTrue() {
    this.pageState = true;
  }

  setLoadFalse() {
    this.pageState = false;
  }
}
