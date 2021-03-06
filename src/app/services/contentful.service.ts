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

  getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.contentfulClient
      .getEntries(
        Object.assign(
          {
            content_type: environment.contentTypeIds.blogPosts,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  getBlogPost(post_id: string): Promise<Entry<any>> {
    return this.contentfulClient
      .getEntry(post_id)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  getRelatedPosts(tags: string): Promise<Entry<any>[]> {
    return this.contentfulClient
      .getEntries({ 'metadata.tags.sys.id[exists]': tags })
      .then((entries) => {
        return entries.items;
      });
  }

  getSearchQuery(search_query: string): Promise<Entry<any>[]> {
    return this.contentfulClient
      .getEntries({ query: search_query })
      .then((entries) => {
        return entries.items;
      });
  }
}
