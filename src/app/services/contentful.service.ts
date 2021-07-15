import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { createClient, Entry } from 'contentful';
@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private contentfulClient = createClient({
    space: environment.space,
    accessToken: environment.accessToken,
  });
  constructor() {}

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.contentfulClient
      .getEntries(
        Object.assign(
          {
            content_type: environment.contentTypeIds.product,
          },
          query
        )
      )
      .then((res) => res.items);
  }
}
