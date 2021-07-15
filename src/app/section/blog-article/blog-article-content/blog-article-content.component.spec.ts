import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleContentComponent } from './blog-article-content.component';

describe('BlogArticleContentComponent', () => {
  let component: BlogArticleContentComponent;
  let fixture: ComponentFixture<BlogArticleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogArticleContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
