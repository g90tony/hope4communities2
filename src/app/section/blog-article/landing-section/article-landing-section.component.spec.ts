import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLandingSectionComponent } from './article-landing-section.component';

describe('ArticleLandingSectionComponent', () => {
  let component: ArticleLandingSectionComponent;
  let fixture: ComponentFixture<ArticleLandingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleLandingSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
