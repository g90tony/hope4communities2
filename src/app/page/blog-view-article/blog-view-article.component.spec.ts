import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogViewArticleComponent } from './blog-view-article.component';

describe('BlogViewArticleComponent', () => {
  let component: BlogViewArticleComponent;
  let fixture: ComponentFixture<BlogViewArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogViewArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogViewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
