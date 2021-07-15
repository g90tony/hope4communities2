import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSearchResultsComponent } from './blog-search-results.component';

describe('BlogSearchResultsComponent', () => {
  let component: BlogSearchResultsComponent;
  let fixture: ComponentFixture<BlogSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
