import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CanonicalService {
  constructor(@Inject(DOCUMENT) private dom) {}

  setCanonicalURL(url?: string) {
    const canURL = url == undefined ? this.dom.URK : url;
    const link: HTMLElement = this.dom.createElement('link');

    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);
  }
}
