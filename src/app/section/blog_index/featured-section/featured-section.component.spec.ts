import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBlogComponent } from './featured-section.component';

describe('FeaturedBlogComponent', () => {
  let component: FeaturedBlogComponent;
  let fixture: ComponentFixture<FeaturedBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedBlogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
